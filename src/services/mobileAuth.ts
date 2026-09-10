import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { supabase } from '../supabaseClient';

export const APP_CUSTOM_SCHEME = 'com.surveyrank.academy';
export const APP_AUTH_CALLBACK = `${APP_CUSTOM_SCHEME}://auth-callback`;

/**
 * Initiates Google OAuth login safely for both Web and Mobile (Android/iOS)
 */
export async function initiateGoogleLogin(): Promise<{ success: boolean; error?: string }> {
  try {
    const isNative = Capacitor.isNativePlatform();

    if (isNative) {
      // On mobile devices, we request Supabase to redirect to the app's custom URL scheme,
      // and skip automatic webview redirect so we can open it in a secure Chrome Custom Tab.
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: APP_AUTH_CALLBACK,
          skipBrowserRedirect: true
        }
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data?.url) {
        // Open Google Sign-In in Chrome Custom Tab
        await Browser.open({
          url: data.url,
          windowName: '_self'
        });
        return { success: true };
      }

      return { success: false, error: 'Could not obtain OAuth sign-in URL' };
    } else {
      // Standard Web flow
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    }
  } catch (err: any) {
    return { success: false, error: err.message || 'Error initiating Google Sign-In' };
  }
}

/**
 * Listens for incoming deep links when returning from Google OAuth into the app
 */
export function setupDeepLinkListener(onSessionEstablished?: () => void): () => void {
  if (!Capacitor.isNativePlatform()) {
    return () => {};
  }

  const listenerPromise = App.addListener('appUrlOpen', async ({ url }) => {
    // 1. Close Chrome Custom Tab if open
    try {
      await Browser.close();
    } catch {
      // Ignore if browser was already closed
    }

    if (!url) return;

    // 2. Process incoming OAuth callback URL
    try {
      // Check for token hash: com.surveyrank.academy://auth-callback#access_token=...&refresh_token=...
      if (url.includes('#') && (url.includes('access_token') || url.includes('refresh_token'))) {
        const hashIndex = url.indexOf('#');
        const hash = url.substring(hashIndex + 1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (!error && onSessionEstablished) {
            onSessionEstablished();
          }
        }
      }
      // Check for PKCE code: com.surveyrank.academy://auth-callback?code=...
      else if (url.includes('code=')) {
        const dummyUrl = new URL(url.replace(/^[a-zA-Z0-9.-]+:\/\//, 'https://dummy.com/'));
        const code = dummyUrl.searchParams.get('code');
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (!error && onSessionEstablished) {
            onSessionEstablished();
          }
        }
      }
    } catch (e) {
      console.error('Error handling deep link auth callback:', e);
    }
  });

  return () => {
    listenerPromise.then((handle) => handle.remove());
  };
}

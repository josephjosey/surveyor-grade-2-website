import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.surveyrank.academy',
  appName: 'SurveyRank Academy',
  webDir: 'dist',
  server: {
    // REAL-TIME SYNC WITH WEB APP:
    // If you set your live production website URL here (e.g. your Vercel or custom domain),
    // any change you deploy on the web app will instantly reflect inside the mobile APK
    // without requiring users to reinstall or update the app from Google Play Store!
    // If left commented or unset, the app uses the built-in bundled offline assets.
    // url: 'https://surveyor-grade-2-website.vercel.app',
    cleartext: true,
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  }
};

export default config;

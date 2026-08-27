import { supabase } from '../supabaseClient';

export const STORAGE_BUCKET = 'app-files';

export interface UploadResult {
  path: string;
  signedUrl: string;
  sizeFormatted: string;
}

/**
 * Format bytes into human-readable string (e.g. 2.45 MB)
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Extract relative storage path if the input is a signed or public Supabase URL.
 * If already a clean path, returns it.
 */
export function extractStoragePath(pathOrUrl: string): string | null {
  if (!pathOrUrl) return null;
  
  // If it's a URL containing the bucket name
  if (pathOrUrl.includes(STORAGE_BUCKET)) {
    const parts = pathOrUrl.split(`${STORAGE_BUCKET}/`);
    if (parts.length > 1) {
      // Remove any URL query params (like ?token=...)
      return parts[1].split('?')[0];
    }
  }
  
  // If it's already a relative path starting with a UUID or userId
  if (!pathOrUrl.startsWith('http') && !pathOrUrl.startsWith('data:') && !pathOrUrl.startsWith('blob:')) {
    return pathOrUrl.split('?')[0];
  }

  return null;
}

/**
 * Upload a user file to Supabase Storage 'app-files' private bucket.
 * Folder rule: ${auth.uid()}/${featureName}/${itemId}/${uuid}.${extension}
 */
export async function uploadUserFile(
  file: File,
  featureName: 'study-notes' | 'pyq-papers' | 'doubts' | 'avatars' | string,
  itemId: string = 'general'
): Promise<UploadResult | null> {
  try {
    // 1. Get authenticated user ID
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    if (!userId) {
      console.warn('Storage Upload: User is not authenticated. Please log in.');
      return null;
    }

    // 2. Generate clean extension and unique filename
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
    const uniqueId = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Rule: ${auth.uid()}/${featureName}/${itemId}/${uuid}.${extension}
    const sanitizedItemId = itemId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const storagePath = `${userId}/${featureName}/${sanitizedItemId}/${uniqueId}.${ext}`;

    // 3. Upload to private bucket
    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(storagePath, file, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.type || 'application/octet-stream'
      });

    if (uploadError) {
      console.error('Storage Upload Error:', uploadError);
      throw uploadError;
    }

    // 4. Create signed URL valid for 7 days (604800 seconds)
    const { data: signData, error: signError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(storagePath, 60 * 60 * 24 * 7);

    if (signError || !signData?.signedUrl) {
      console.error('Signed URL Error:', signError);
      throw signError || new Error('Failed to generate signed URL');
    }

    return {
      path: storagePath,
      signedUrl: signData.signedUrl,
      sizeFormatted: formatBytes(file.size)
    };
  } catch (err: any) {
    console.error('Storage Service Error during upload:', err);
    return null;
  }
}

/**
 * Generate a fresh signed URL for a stored file path.
 */
export async function getSignedUrl(pathOrUrl: string, expiresInSeconds: number = 60 * 60 * 24 * 7): Promise<string> {
  if (!pathOrUrl) return '';

  const cleanPath = extractStoragePath(pathOrUrl);
  if (!cleanPath) {
    // If it's an external link or data URL, return as is
    return pathOrUrl;
  }

  try {
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(cleanPath, expiresInSeconds);

    if (error || !data?.signedUrl) {
      return pathOrUrl;
    }

    return data.signedUrl;
  } catch (err) {
    console.warn('Storage: could not create signed URL for path:', cleanPath, err);
    return pathOrUrl;
  }
}

/**
 * Delete a file from the 'app-files' Supabase Storage bucket.
 */
export async function deleteUserFile(pathOrUrl: string): Promise<boolean> {
  const cleanPath = extractStoragePath(pathOrUrl);
  if (!cleanPath) return false;

  try {
    const { error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .remove([cleanPath]);

    if (error) {
      console.warn('Storage Delete Warning:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Storage Delete Exception:', err);
    return false;
  }
}

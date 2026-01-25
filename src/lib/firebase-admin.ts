import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

// Lazy initialization - only initialize when actually needed (at runtime, not during build)
let adminDbInstance: Firestore | null = null;

const initializeFirebaseAdmin = () => {
  if (getApps().length > 0) {
    return; // Already initialized
  }

  // Check if all required environment variables are present
  if (!process.env.FIREBASE_PROJECT_ID || 
      !process.env.FIREBASE_PRIVATE_KEY_ID || 
      !process.env.FIREBASE_PRIVATE_KEY || 
      !process.env.FIREBASE_CLIENT_EMAIL || 
      !process.env.FIREBASE_CLIENT_ID) {
    console.error('Missing required Firebase environment variables');
    return;
  }

  const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`,
  };

  initializeApp({
    credential: cert(serviceAccount as any),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
};

export const getAdminDb = (): Firestore | null => {
  // Only initialize at runtime, not during build
  if (typeof window !== 'undefined') {
    return null; // Client-side, Firebase Admin doesn't work here
  }

  if (!adminDbInstance) {
    try {
      initializeFirebaseAdmin();
      adminDbInstance = getFirestore();
    } catch (error) {
      console.error('Failed to initialize Firebase Admin:', error);
      return null;
    }
  }
  return adminDbInstance;
};

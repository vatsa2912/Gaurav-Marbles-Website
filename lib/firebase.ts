import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if required Firebase configuration environment variables are present
export const isFirebaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

let app: FirebaseApp | undefined;
let authInstance: Auth | undefined;
let dbInstance: Firestore | undefined;

if (isFirebaseConfigured) {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    authInstance = getAuth(app);
    dbInstance = getFirestore(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
}

/**
 * Creates a safe proxy for Auth or Firestore when credentials are missing.
 * Prevents build-time module evaluation crashes while providing clear runtime diagnostics.
 */
function createServiceProxy<T extends object>(serviceName: string): T {
  return new Proxy({} as T, {
    get(_target, prop) {
      if (prop === "then" || prop === "$$typeof" || typeof prop === "symbol") {
        return undefined;
      }
      return (..._args: unknown[]) => {
        throw new Error(
          `Firebase ${serviceName} is not initialized. Please configure NEXT_PUBLIC_FIREBASE_* environment variables in your deployment settings.`
        );
      };
    },
    apply() {
      throw new Error(
        `Firebase ${serviceName} is not initialized. Please configure NEXT_PUBLIC_FIREBASE_* environment variables in your deployment settings.`
      );
    },
  });
}

export const auth: Auth = authInstance ?? createServiceProxy<Auth>("Auth");
export const db: Firestore = dbInstance ?? createServiceProxy<Firestore>("Firestore");
export { app };
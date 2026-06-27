import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json";

// Initialize Firebase using the configuration from firebase-applet-config.json
const app = initializeApp(firebaseConfig);

// Initialize Firestore with the database ID specified in the configuration
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Operation type enum for error tracking
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

// JSON-compliant structure for advanced Firestore error diagnostics
export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

/**
 * Handle Firestore errors by formatting them as JSON strings with detailed context.
 */
export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: false,
      isAnonymous: false,
    },
    operationType,
    path,
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo, null, 2));
  throw new Error(JSON.stringify(errInfo));
}

// Save appointment function with comprehensive validation and JSON-based error diagnostics
export async function createAppointment(appointment: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}) {
  const path = "appointments";
  try {
    const docRef = await addDoc(collection(db, path), {
      ...appointment,
      createdAt: new Date().toISOString(),
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}


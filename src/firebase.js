import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAI, getGenerativeModel, GoogleAIBackend } from 'firebase/ai';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// Google Account authentication
export const auth = getAuth(firebaseApp);
//AI Gemini model
const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
export const geminiModel = getGenerativeModel(ai, {
  model: 'gemini-2.5-flash',
});

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 1. Create Context for User
type User = {
  displayName: string;
  email: string;
};
export type CurrentUser = {
  currentUser: User;
  userLoggedIn: boolean;
};
const AuthContext = createContext<CurrentUser | null>(null);

// 2. Create a Hooks - other components must use this when to access a user.
export function useAuth() {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error('useAuth must be used when to access user');
  }
  return user;
}
// 3. create AuthProvider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email } = user;
        setCurrentUser({ displayName, email } as User);
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
    });
    setLoading(false);
    return () => unsubscribe(); //Call when the component is unmount.
  }, [auth]);

  const value = {
    userLoggedIn,
    currentUser,
  } as CurrentUser;

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export const doSignOut = () => {
  return auth.signOut();
};
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      console.log(`${errorCode}: ${errorMessage}, ${email}`);
    });
};
export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

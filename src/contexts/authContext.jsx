import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB17nCs1DWch35PfJ0X6FAVwA0iqI79eT0',
  authDomain: 'hiroko-web.firebaseapp.com',
  projectId: 'hiroko-web',
  storageBucket: 'hiroko-web.firebasestorage.app',
  messagingSenderId: '641186624158',
  appId: '1:641186624158:web:2ba9eb175d315e199d818f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 1. Create Context for User
const AuthContext = createContext(undefined);

// 2. Create a Hooks - other components must use this when to access a user.
export function useAuth() {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }
  return user;
}
// 3. create AuthProvider
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      const { displayName, email } = user;
      setCurrentUser({ displayName, email });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    userLoggedIn,
    currentUser,
  };

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
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth, UserCredential } from "firebase/auth"
import firebase, { auth } from "../services/firebase";


type User = {
  email: string;
  password: string;
}

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
}

type AuthContextType = {
  user: User | undefined;
  signIn: (props: User) => {};
  signUp: (props: User) => {};
  signInWithGoogle: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();
  const auth = getAuth();

  const signIn = async (props: User) => {
    signInWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      userCredential.user;
    })
    .catch((error) => {
      error.code && error.message;
    })
  };

  const signUp = async (props: User) => {
    createUserWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      userCredential.user;
    })
    .catch((error) => {
      error.code && error.message;
    })
  };

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
      })
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { email } = user

        if (!email) {
          throw new Error('Missing information from your Account.');
        }
        setUser({
          email: email
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider  value={{user, signIn, signUp}}>
      {props.children}
    </AuthContext.Provider>
  )

}

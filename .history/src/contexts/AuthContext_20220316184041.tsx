import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth, UserCredential } from "firebase/auth"
import { auth } from "../services/firebase";


type User = {
  email: string;
}

type Signup = {
  email: string;
  password: string;
}

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
}

type AuthContextType = {
  user: User | undefined;
  signIn: (props: Signup) => void
  signUp: (props: Signup) => void;
}


export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  const signIn = async (props: Signup) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

  const signUp = async (props: Signup) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

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

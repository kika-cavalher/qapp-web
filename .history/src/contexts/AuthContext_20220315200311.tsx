import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from "firebase/auth"
import { auth } from "../services/firebase";
import React from "react";

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


export const AuthContext = createContext<any>(null)


export function AuthContextProvider(props: AuthContextProviderProps){
  
  function signUp(props: Signup) {
    return createUserWithEmailAndPassword(auth, props.email, props.password)
  }
  function signIn(props: Signup) {
    return signInWithEmailAndPassword(auth, props.email, props.password)
  }

  function getUser() {
    return auth.currentUser
  }

  useEffect(() => {
    const [user, setUser] = useState<User>();
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


  const value = {
    signOut,
    signUp
  }



  return (
    <AuthContext.Provider  value={ value }>
      {props.children}
    </AuthContext.Provider>
  )

}

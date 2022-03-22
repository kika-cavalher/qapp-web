import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from "firebase/auth"
import { auth } from "../services/firebase";


type User = {
  email: string;
}

type Signup = {
  email: string;
  password: string;
}

type AuthContextType = {
  user: User | undefined;
  signUp: () => void;
  signIn: () => void;
}

type AuthContextProviderProps = {
  children?: ReactNode;
}


export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider({ children }: AuthContextProviderProps){


  const signIn = (props:Signup) => {
    return createUserWithEmailAndPassword(auth, props.email, props.password)
  }
  const signUp = (props:Signup) => {
    return signInWithEmailAndPassword(auth, props.email, props.password)
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
    signIn,
    signUp,
};

  return (
    <AuthContext.Provider  value={{ value }}>
      {children}
    </AuthContext.Provider>
  )

}


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

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
}

type AuthContextType = {
  user: User | undefined;
  signIn: (props: Signup) => void;
  signUp: () => void;
}


export const AuthContext = createContext({} as AuthContextType);


export function AuthContextProvider(props: AuthContextProviderProps){
  
  function signUp(props: Signup) {
    return createUserWithEmailAndPassword(auth, props.email, props.password)
  }
  function signIn(props: Signup) {
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
    signUp

  }

  return (
    <AuthContext.Provider  value={ value }>
      {props.children}
    </AuthContext.Provider>
  )

}


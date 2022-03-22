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
    const signin = await signInWithEmailAndPassword(auth, props.email, props.password)
    if (signin.user) {
      const { email } = signin.user

      if (!email) {
        throw new Error('Missing information from your Account.');
      }
      setUser({
        email: email
      })
    }
  }

  const signUp = async (props: Signup) => {
    const signup = await createUserWithEmailAndPassword(auth, props.email, props.password)
    if (signup.user) {
      const { email } = signup.user

      if (!email) {
        throw new Error('Missing information from your Account.');
      }
      setUser({
        email: email
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

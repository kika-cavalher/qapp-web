import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth"


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
}


export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();
  const auth = getAuth();

  const signIn = async (props: User) => {
    signInWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      if (!userCredential) {
        throw new Error('Missing information from Google Account.');
      }
      setUser({
        email: props.email,
        password: props.password
      })
    })
    .catch((error) => {
      console.log(error.code & error.message);
    })
  }


  const signUp = async (props: User) => {
    createUserWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.code & error.message);
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
          email: email,
          password: user.refreshToken
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

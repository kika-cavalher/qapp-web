import { createContext, ReactNode, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth"
import firebase from "firebase/compat";


type User = {
  email: string;
  password: string;
}

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
}

type AuthContextType = {
  user: User | undefined;
  signIn: (props: User) => Promise<void>;
  signUp: (props: User) => Promise<void>;
  // signInWithGoogle: () => Promise<void>;
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

  // async function signInWithGoogle() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   const result = await auth.signInWithPopup(provider);
  //   .then((userCredential) => {
  //     if (!userCredential) {
  //       throw new Error('Missing information from Google Account.');
  //     }
  //     setUser({
  //       email: email,
  //       password: password
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error.code & error.message);
  //   })
  // }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { email } = user

        if (!email) {
          throw new Error('Missing information from your Account.');
        }
        setUser({
          email: email,
          //erro , onde pega a senha?
          password: user.refreshToken
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  //useImperativeHandle? 

  return (
    <AuthContext.Provider  value={{user, signIn, signUp}}>
      {props.children}
    </AuthContext.Provider>
  )

}

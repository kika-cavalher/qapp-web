import { createContext, ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

type User = {
  email: string;
  password: string;
};

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
};

type AuthContextType = {
  user: User | undefined;
  signIn: (props: User) => Promise<void>;
  signUp: (props: User) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();
  const auth = getAuth();

  const signIn = async (props: User) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        props.email,
        props.password
      );

      console.log(response, "response signIn");

      if (response) {
        localStorage.setItem('@qapp:user-token', response.user.refreshToken);
      }
    } catch (error: any) {
      console.log(error.code & error.message);
    }
  };

  const signUp = async (props: User) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        props.email,
        props.password
      );

      console.log(response, "response");
    } catch (error: any) {
      console.log(error.code & error.message);
    }

    // createUserWithEmailAndPassword(auth, props.email, props.password)
    // .then((userCredential) => {
    //   console.log(userCredential.user);
    // })
    // .catch((error) => {
    //   console.log(error.code & error.message);
    // })
  };

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      if (response) {
        localStorage.setItem("@qapp:user-token", response.user.refreshToken);
        localStorage.setItem(
          "@qapp:user-name",
          response.user.displayName ? response.user.displayName : ""
        );
      }
    } catch (error: any) {
      console.log(error.code & error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;

        if (!email) {
          throw new Error("Missing information from your Account.");
        }
        setUser({
          email: email,
          password: user.refreshToken,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
};

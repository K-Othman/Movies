import {
  useContext,
  createContext,
  FC,
  ReactNode,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";

type Props = {
  children: ReactNode;
};

interface IAuth {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }, []);

  const logOut = useCallback(() => {
    signOut(auth);
    localStorage.clear();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthContextValue = useMemo(
    () => ({
      googleSignIn,
      logOut,
      user,
    }),
    [googleSignIn, logOut, user]
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

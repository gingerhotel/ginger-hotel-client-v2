import React from 'react';
import { useStorageState } from './useStorageState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authStore from '../atom/zustand/authStore';

const AuthContext = React.createContext<{ signIn: () => void; signOut: () => void; session?: string | null, isLoading: boolean } | null>(null);

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}


const loadAT = async () => {
    // const accessToken = await AsyncStorage.getItem("accessToken");
    
    // const { isLogin, setisLogin } = authStore();
    // /* error code */
    // if (accessToken) setisLogin(true);
    // console.log(`ctx accessToken is ${accessToken}`);
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  loadAT();
  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
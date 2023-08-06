import { STORAGE_KEYS } from "src/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useMemo, useRef, useState } from "react";
 
export interface AuthContextInterface {
  getLoggedInUser: any,
  setLoggedInUser: Dispatch<SetStateAction<any>>
}
const defaultState = {
  getLoggedInUser:  async () => {},
  setLoggedInUser: async (value: any) => { }
} as AuthContextInterface
export const AuthContext = createContext(defaultState);
type AuthProviderProps = { children: ReactNode }

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authDetails, setAuthDetails] = useState<any>(null);

  const setLoggedInUser = async (data: any) => {
    const storage = await AsyncStorage.setItem(STORAGE_KEYS.login_user_details, JSON.stringify(data));
    setAuthDetails(storage);
  };

  const getLoggedInUser = async () => {
    const result = await AsyncStorage.getItem(STORAGE_KEYS.login_user_details);
    if (result) {
      return JSON.parse(result);
    }
    return null;
  };

  const authContextValues = useMemo(
    () => ({
      authDetails,
      setAuthDetails,
      setLoggedInUser,
      getLoggedInUser
    }),
    [
      authDetails
    ]
  );

   //authContextRef.current = { setLoggedInUser };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

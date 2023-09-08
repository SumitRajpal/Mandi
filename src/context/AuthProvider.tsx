import { STORAGE_KEYS } from "src/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
 
export interface AuthContextInterface {
  getLoggedInUser: any,
  setLoggedInUser: Dispatch<SetStateAction<any>>
  getCart: any,
  setCart: Dispatch<SetStateAction<any>>
  getModelState: any,
  setModelState: Dispatch<SetStateAction<any>>
}
const defaultState = {
  getLoggedInUser:  async () => {},
  setLoggedInUser: async (value: any) => { },
  getCart:  async () => {},
  setCart: async (value: any) => { },
  getModelState:  async () => {},
  setModelState: async (value: any) => { }
} as AuthContextInterface
export const AuthContext = createContext(defaultState);
type AuthProviderProps = { children: ReactNode }

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authDetails, setAuthDetails] = useState<any>(null);
  const [cartDetails, setCartDetails] = useState<any>(null);
  const [model, setModel] = useState<boolean>(false);

  const setLoggedInUser = async (data: any) => {
    const storage = await AsyncStorage.setItem(STORAGE_KEYS.login_user_details, JSON.stringify(data));
    setAuthDetails(storage);
  };

  const setCart = async (data: any) => {
    const storage = await AsyncStorage.setItem(STORAGE_KEYS.cart_details, JSON.stringify(data));
    setCartDetails(storage);
  };
  const getCart = async () => {
    const result = await AsyncStorage.getItem(STORAGE_KEYS.cart_details);
    if (result) {
      return JSON.parse(result);
    }
    return {};
  };
  
  const setModelState = async (data: boolean) => {
    setModel(data)
  };
  const getModelState = async () => {
    return model;
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
      cartDetails,
      setAuthDetails,
      setLoggedInUser,
      getLoggedInUser,
      setModelState,
      setCart,
      getCart,
      getModelState
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

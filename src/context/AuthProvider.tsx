import AsyncStorage from "@react-native-async-storage/async-storage"
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react"
import { STORAGE_KEYS } from "src/constants"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface AuthContextInterface {
  getLoggedInUser: any
  setLoggedInUser: Dispatch<SetStateAction<any>>
  getCart: any
  setCart: Dispatch<SetStateAction<any>>
  getModelState: any
  setModelState: Dispatch<SetStateAction<any>>
  getAuthAddress: any
  setAuthAddress: Dispatch<SetStateAction<any>>
}
const defaultState = {
  getLoggedInUser: async () => {},
  setLoggedInUser: async (value: any) => {},
  getCart: async () => {},
  setCart: async (value: any) => {},
  getModelState: async () => {},
  setModelState: async (value: any) => {},
  getAuthAddress: async () => {},
  setAuthAddress: async (value: any) => {},
} as AuthContextInterface
export const AuthContext = createContext(defaultState)
type AuthProviderProps = {children: ReactNode}
export const CartStore = create<any>()(
  persist(
    (set, get) => ({
      cart: {},
      totalCartItem:() => Object.values(get().cart)?.reduce((sum: number, key: any) => 
      sum + key?.quantity
   , 0) || 0,
      setCartValue: (value: any) => set((state: any) => ({cart: value})),
      resetCart: () => set({cart: {}}),
    }),
    {name: "mandi-cart", storage: createJSONStorage(() => AsyncStorage)},
  ),
)
export default function AuthProvider({children}: AuthProviderProps) {
  const [authDetails, setAuthDetails] = useState<any>(null)
  const [cartDetails, setCartDetails] = useState<any>(null)
  const [address, setAddress] = useState<any>(null)
  const [model, setModel] = useState<boolean>(false)

  const setCartValue = CartStore((state: any) => state.setCartValue)

  const setLoggedInUser = async (data: any) => {
    const storage = await AsyncStorage.setItem(
      STORAGE_KEYS.login_user_details,
      JSON.stringify(data),
    )
    setAuthDetails(storage)
  }

  const setCart = async (data: any) => {
    await setCartValue(data)
  }
  const cart = CartStore((state: any) => state.cart)
  
  const getCart = async () => {
    return await cart
  }

  const setAuthAddress = async (data: any) => {
    const storage = await AsyncStorage.setItem(
      STORAGE_KEYS.user_address,
      JSON.stringify(data),
    )
    setAddress(storage)
  }
  const getAuthAddress = async () => {
    const result = await AsyncStorage.getItem(STORAGE_KEYS.user_address)
    if (result) {
      return JSON.parse(result)
    }
    return {}
  }

  const setModelState = async (data: boolean) => {
    setModel(data)
  }
  const getModelState = async () => {
    return model
  }
  const getLoggedInUser = async () => {
    const result = await AsyncStorage.getItem(STORAGE_KEYS.login_user_details)
    if (result) {
      return JSON.parse(result)
    }
    return null
  }

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
      getModelState,
      setAuthAddress,
      getAuthAddress,
    }),
    [authDetails, getCart, setCart, cart],
  )

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  )
}

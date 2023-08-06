import  STORAGE_KEYS  from "src/constants/storageKey";
import "src/context/LocalizationRoot";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useTranslation } from "react-i18next";


export interface LocalizationContextInterface {
        setI18nConfig:Dispatch<SetStateAction<any>>,
        getTranslation:any,
        getUserLanguage:any,
        saveUserLanguage:Dispatch<SetStateAction<any>>
}
const defaultState = {
  getTranslation:  async () => {},
  setI18nConfig: async (value: any) => { },
  getUserLanguage:  async () => {return 'en'},
  saveUserLanguage: async (value: any) => { }
} as LocalizationContextInterface
export const LocalizationContext = createContext(defaultState);
type LocalizationProviderProps = { children: ReactNode }

export function LocalizationProvider ({ children }: LocalizationProviderProps) {
  const { i18n, t } = useTranslation();

  const setI18nConfig = (language:any) => {
    i18n.changeLanguage(language).then((tr:any) => {
      tr(language);
    });
  };

  const getTranslation = (text:any, argumentsData:any) => t(text, argumentsData);

  const getUserLanguage = (callback:any) => {
    const { language } = i18n;
    callback(language);
  };

  const saveUserLanguage = (language:any) => {
    setI18nConfig(language);
    AsyncStorage.setItem(STORAGE_KEYS.selected_language, language);
  };

  return (
    <LocalizationContext.Provider
      value={{
        setI18nConfig,
        getTranslation,
        getUserLanguage,
        saveUserLanguage
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

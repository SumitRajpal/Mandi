import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "src/context/AuthProvider";
import React, { Component, useContext } from "react"
import { FONT_NAME, PERMISSIONS_KEYS, SCREEN_IDENTIFIER, STORAGE_KEYS, WEB_SERVICES } from "src/constants";
import { COLORS } from "src/constants/font";
import { api } from "src/api/http";
import { useQuery } from "@tanstack/react-query";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { IUSERS } from "src/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { version as currentVersion } from "../../../app.json";


/**
 * 
 * @case1 check user details exist getDetails else login page
 * @case2 getDetails by phone number & set to local storage else login page
 * @case3 check App version 
 */

const Splash= (): JSX.Element => {
  const navigation = useNavigation();
  const { getLoggedInUser,getCart } = useContext(AuthContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1.0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.secondaryGreen
    },
  });
  // const shouldFetchProfile = permissionType?.includes(
  //   PERMISSIONS_KEYS.PROFILE_READ
  // );

  function moveToHome() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN_IDENTIFIER.Home.identifier }]
      })
    );
  }
  function moveToLogin() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN_IDENTIFIER.Login.identifier }]
      })
    );
  }
 const moveToNext = async () => {
   const result = await getLoggedInUser();
  //AsyncStorage.removeItem("cart_details")
    if (result) {
      moveToHome();
    } else {
      moveToLogin();
    }
  }
  
  
  const fetchAppVersion = () => api({ url: WEB_SERVICES.utility.appVersion });

  const { isLoading: isLoadingAppVersion, refetch } = useQuery(["appVersion"],
    fetchAppVersion,
    {
      onError: () => {
        
      },
      onSuccess: (response:any) => {
        
        if (response) {
          const version:any = Platform.select({
            ios: response.ios,
            android: response.android
          });
          const localVersion:any = Platform.select({
            ios: currentVersion.ios,
            android: currentVersion.android
          });
          
          if (version > localVersion) {
            console.log(version , localVersion,)
          } else {
            moveToNext();
          }
        }
      }
    }
  );

  return (
    <View style ={styles.container} >
      <Text>spand</Text>
      
    </View>
  );
};
export default Splash;

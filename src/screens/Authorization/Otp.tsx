import { AuthContext } from "src/context/AuthProvider";
import { api } from "src/api/http";
import { Modal, StyleSheet, View, ScrollView, Platform, Keyboard } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react"
import Toast from "react-native-simple-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KEYBOARD_TYPE, REGEX, SCREEN_IDENTIFIER, STRING, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
import { IUSERS } from "src/models";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProgressView from "src/components/ProgressView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, Text } from "src/components";
import DefaultImage from "src/components/DefaultImage";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SensorType, interpolate, useAnimatedSensor, useAnimatedStyle } from "react-native-reanimated";
import Input from "src/components/Input";
import DefaultInput from "src/components/Input";


interface NewCustomer {
      readonly phone : string
      readonly isUserExist:boolean
}

const Otp = (): JSX.Element => {
      const { setLoggedInUser } = useContext(AuthContext);
      const navigation = useNavigation();
      const route:any = useRoute();
      const [loginModel, setLoginModel] = useState(false);
      const [otp, setOtp] = useState("");
      const [time, setTime] = useState(59);
      
      useEffect(() => {
            let interval = setInterval(() => {
                  setTime(lastTimerCount => {
                        lastTimerCount <= 1 && clearInterval(interval)
                        return lastTimerCount > 0 ? lastTimerCount - 1 : 0
                  })
            }, 1000)
            return () => clearInterval(interval)
      }, []);
      const styles = StyleSheet.create({
            container: {
                  flex: 1,
                  backgroundColor: COLORS.white
            },
            gridFlex: {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  padding: 5,
                  alignItems: "center",
                  width: screenWidth,

            },
            otp: {
                  letterSpacing: screenWidth / 8,
                  textAlign: "center",
            },
            tnc: {
                  padding: 5,
                  flex: 1,
                  width: screenWidth,
                  backgroundColor: COLORS.primaryGray,
                  position: "absolute",
                  alignItems: "center",
                  bottom: 0
            },
            inputView: {
                  marginHorizontal: screenRatio * 20,
                  alignItems: "center"
            },
            margin: {
                  margin: screenRatio * 40
            },
            phone: {
                  marginTop: screenRatio * 50,
                  margin: screenRatio * 10
            },
      });
      const loginMutation = useMutation(
            (body: any) =>
                  api({
                        url: WEB_SERVICES.user.signin,
                        method: WEB_SERVICES.method.POST,
                        body,
                  }),
            {
                  onSuccess: (response: IUSERS) => {
                        setLoggedInUser(response);
                     
                        navigation.dispatch(
                              CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: SCREEN_IDENTIFIER.Home.identifier }]
                              })
                        );
                  },
                  onError: (error: any) => {
                        Toast.show(error.message, 5);
                  }
            }
      );
      const onLogin = async () => {
            const params: any = {
                  phone: route.params?.phone
            };
            setLoginModel(!loginModel)
             await loginMutation.mutate(params);
      };

      return (
            <View style={styles.container}>
                  <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.container}>
                              <View style={styles.inputView}>
                                    <View style={styles.phone}>
                                          <Text color={COLORS.text_black} size={FONT_SIZE.regular} isPoppins={true} weight={FONT_WEIGHT.heavy}> We've send verification code to</Text>
                                    </View>
                                    <View >
                                          <Text color={COLORS.text_black} size={FONT_SIZE.medium} isPoppins={true} weight={FONT_WEIGHT.black}>{String("+91 ").concat(route.params?.phone)}</Text>
                                    </View>
                                    <DefaultInput
                                          style={[styles.inputView, styles.margin]}
                                          keyboardType={KEYBOARD_TYPE.phone}
                                          value={otp}
                                          input={styles.otp}
                                          maxLength={4}
                                          onChangeText={(otp: string) => {
                                                if (REGEX.otpRegex.test(otp)) {
                                                      setOtp(otp)
                                                }
                                                if (otp.trim().length === 4) {
                                                     onLogin();
                                                }
                                          }}
                                    />
                                    <Text color={COLORS.primaryGreen} size={FONT_SIZE.large} isPoppins={true} weight={FONT_WEIGHT.heavy} isTranslate={false}> {time ? `Retry in ${time} sec` : 'Retry Now'}</Text>
                              </View>

                        </ScrollView>
                        <View style={styles.tnc}>
                              <Text color={COLORS.secondaryGray} size={FONT_SIZE.extra_small} isPoppins={true} weight={FONT_WEIGHT.heavy}> By continuing you agree to our Terms of service & Privacy policy</Text>
                        </View>
                  </SafeAreaView>

            </View >
      );
};
export default Otp;

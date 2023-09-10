import { AuthContext } from "src/context/AuthProvider";
import { api } from "src/api/http";
import { Modal, StyleSheet, View, ScrollView, Platform, Keyboard, FlatList } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react"
import Toast from "react-native-simple-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KEYBOARD_TYPE, REGEX, SCREEN_IDENTIFIER, STRING, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
import { IUSERS } from "src/models";
import { CommonActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProgressView from "src/components/ProgressView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, Text } from "src/components";
import DefaultImage from "src/components/DefaultImage";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SensorType, interpolate, useAnimatedSensor, useAnimatedStyle } from "react-native-reanimated";
import Input from "src/components/Input";
import Icon from 'react-native-vector-icons/AntDesign';
import DefaultInput from "src/components/Input";
import { DefaultCategory } from "src/components/Products/ShopCategory";

const Login = (): JSX.Element => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [loginModel, setLoginModel] = useState(false);
  const [phone, setPhone] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white
    },
    gridFlex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 0,
      gap: 5,
      alignItems: "center",
      width: screenWidth,

    },
    otp: {
      letterSpacing: screenRatio * (screenWidth / 10),
      textAlign: "center",
    },
    phone: {
      letterSpacing: 1,
      textAlignVertical: "top",
    },
    logo: {
      alignItems: "center",
      padding: 10,
      marginBottom: screenRatio * 3
    },
    customImage: {
      flex: 1,
      backgroundColor: COLORS.secondaryWhite,
      borderRadius: screenRatio * 20
    },
    flexContent: {
      flex: 1,
      alignItems: "center"
    },
    tnc: {
      padding: 5,
      flex: 1,
      width: screenWidth,
      backgroundColor: COLORS.primaryGray,
      position: "absolute",
      alignItems: "center",
      bottom: isKeyboardVisible ? screenRatio * 5 : 0
    },
    inputView: {
      marginHorizontal: screenRatio * 20
    },
    margin: {
      marginTop: screenRatio * 20
    },
    modalChild: {
      height: screenHeight / 3,
      position: "absolute",
      bottom: 0,
      width: screenWidth,
      backgroundColor: COLORS.primaryWhite,
      borderRadius: screenRatio * 20,
      shadow: {
        shadowRadius: 10,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowColor: COLORS.black,
        elevation: 4,
      },
    },
    modelParent: {
      height: screenHeight,

      backgroundColor: COLORS.transparent,
      bottom: isKeyboardVisible ? screenHeight / 3 : 0
    },
    loginText: {
      alignItems: "center",
      marginVertical: screenRatio * 20
    },
    close: {
      alignContent: "center",
      alignSelf: "center",
      position: "absolute",
      bottom: screenRatio * (screenHeight / 3.5)
    }
  });

  const setInitialState = async () => {
    await AsyncStorage.clear();
    queryClient.clear();
  };

  useEffect(() => {

    const showKeyboardListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideKeyboardListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
    return () => {
      hideKeyboardListener.remove();
      showKeyboardListener.remove();
    };
  }, []);

  const onLogin = async () => {
    const checkUserData = {
      phone: phone
    }
    setLoginModel(!loginModel)
    navigation.navigate(SCREEN_IDENTIFIER.Otp.identifier, checkUserData)
  };
  // const HALF_PI = Math.PI / 2;
  // const IMAGE_OFFESET = 30;
  // const sensor = useAnimatedSensor(SensorType.ROTATION, { interval: 1 })
  // const imageStyle = useAnimatedStyle(() => {

  //   const { yaw, pitch, roll } = sensor.sensor.value;

  //   return {
  //     top: interpolate(pitch, [-HALF_PI, HALF_PI], [-IMAGE_OFFESET, 0]),
  //     left: roll * (IMAGE_OFFESET / 2)
  //   }
  // })

  const categoryList = [{ image: "https://freepngimg.com/thumb/banana/26-banana-png-image-bananas-picture-download.png" },
  { image: "https://freepngimg.com/thumb/tomato/6-tomato-png-image.png" },
  { image: "https://freepngimg.com/thumb/kiwi/20-kiwi-png-image-fruit-kiwi-png-pictures-download.png" },
  { image: "https://freepngimg.com/thumb/onion/1-2-onion-free-png-image.png" },
  { image: "https://freepngimg.com/thumb/broccoli/12-broccoli-png-image-with-transparent-background.png" },
  { image: "https://freepngimg.com/thumb/cucumber/11-cucumber-png-image-picture-download.png" },
  { image: "https://freepngimg.com/thumb/carrot/1-carrot-png-image.png" },
  { image: "https://freepngimg.com/thumb/potato/8-2-potato-png-pic.png" },
  { image: "https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png" }]
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <FlatList
            scrollEnabled={false}
            data={categoryList}
            numColumns={3}
            contentContainerStyle={{marginVertical:screenRatio*20}}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => item && <DefaultCategory styles={{height: screenRatio * ( screenHeight / 10),
            width: screenRatio * (screenWidth / 4.8)}} title={""} imageUri={item?.image} data={item} />}
          />
          <View style={styles.logo}>
            <DefaultImage styles={styles.customImage} imageUri={"https://freepngimg.com/thumb/graphic_design/6-2-graphic-design-transparent.png"} />
          </View>
          <View style={styles.logo}>
            <Text size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}> Best app for daily grocery</Text>
          </View>


          <Button style={[styles.inputView, styles.margin]}
            title="Login"
            onPress={() => { setLoginModel(true) }} />
        </ScrollView>
        <View style={styles.tnc}>
          <Text color={COLORS.secondaryGray} size={FONT_SIZE.extra_small} isPoppins={true} weight={FONT_WEIGHT.roman}> By continuing you agree to our Terms of service & Privacy policy</Text>
        </View>

        <Modal
          animationType="slide"
          visible={loginModel}
          transparent
          hardwareAccelerated={true}
          onRequestClose={() => {

          }}>

          <View style={styles.modelParent}>
            <View style={styles.modalChild}>
              <View style={styles.close}>
                <Icon name="closecircle" size={screenRatio * 30} color={COLORS.text_black} onPress={() => setLoginModel(false)} />
              </View>
              <View style={styles.loginText}>
                <Text size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}> Sign up or Log in </Text>
              </View>
              <DefaultInput
                style={[styles.inputView]}
                keyboardType={KEYBOARD_TYPE.phone}
                value={phone}
                input={styles.phone}
                maxLength={10}
                placeholderText={STRING.enter_phone_number}
                onChangeText={(phone: any) => {
                  if (REGEX.phoneRegex.test(phone)) {
                    setPhone(phone);
                  }

                }}
              />
              <Button style={[styles.inputView, styles.margin]}
                title="Login" disabled={!(phone.trim().length === 10)} onPress={() => { onLogin() }} />

            </View>
            <View style={styles.tnc}>
              <Text color={COLORS.secondaryGray} size={FONT_SIZE.extra_small} isPoppins={true} weight={FONT_WEIGHT.roman}> By continuing you agree to our Terms of service & Privacy policy</Text>
            </View>
          </View>
        </Modal>
      </SafeAreaView>

    </View >
  );
};
export default Login;

import { FlatList, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { DefaultLabel } from "src/components";
import { SCREEN_IDENTIFIER, screenHeight, screenRatio } from "src/constants";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FMIcon from 'react-native-vector-icons/FontAwesome6';
import { CommonActions, useNavigation } from "@react-navigation/native";
import Header from "src/components/header";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "..";
import { AuthContext } from "src/context/AuthProvider";
import AddressList from "src/components/AddressList";

const Address = (): JSX.Element => {
      const { setLoggedInUser } = useContext(AuthContext);
      type StackNavigation = StackNavigationProp<StackParamList>;
      const navigation = useNavigation<StackNavigation>();
      const defaultStyles = StyleSheet.create({
            container: {
                  flex: 1,
                  backgroundColor: COLORS.white_alpha
            },
            bill: {
                  flex: 1,
                  shadowColor: COLORS.primaryGray,
                  borderRadius: 10,
                  borderWidth: 0,
                  borderColor: COLORS.primaryGray,
                  shadow: {
                        ...Platform.select({
                              android: {
                                    elevation: 5,
                                    shadowColor: COLORS.black_alpha,
                              },
                              ios: {
                                    shadowColor: COLORS.primaryGreen,
                                    shadowOpacity: 5,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 4, height: 4 }
                              }
                        }),
                        backgroundColor: COLORS.primaryGreen,
                        borderRadius: 4
                  }, marginVertical: 10

            }
      });

      return (
            <View style={defaultStyles.container} >
                  <SafeAreaView style={defaultStyles.container}>
                        <Header title="Address" />
                        <ScrollView style={defaultStyles.container}>
                              <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                    <View style={{ flex: 2 }}>
                                          <FMIcon name="plus" size={screenRatio * 14} color={COLORS.tertiaryGray} />
                                    </View>
                                    <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                          <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Add New Address"} />
                                    </View>

                              </View>
                              <AddressList/>
                        </ScrollView>
                  </SafeAreaView>
            </View>
      );
};
export default Address;

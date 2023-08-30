import { FlatList, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { DefaultLabel } from "src/components";
import { SCREEN_IDENTIFIER, screenHeight, screenRatio } from "src/constants";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FMIcon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from "@react-navigation/native";
import Header from "src/components/header";
const Profile = (): JSX.Element => {
      const navigation = useNavigation();
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
                      <Header title="Profile"/>
                        <ScrollView style={defaultStyles.container}>
                        
                              <View style={{ paddingHorizontal: 10 }}>

                                    <View style={defaultStyles.bill}>


                                          <View style={{ flex: 1, justifyContent: "center", alignContent: "center", alignItems: "flex-start", paddingVertical: 5 }}>

                                                <View style={{ flex: 1, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 10 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.xxxx_large} title={"Sumit Rajpal"} />
                                                </View>

                                          </View>
                                          <View style={{ flex: 1, justifyContent: "center", alignContent: "flex-start", alignItems: "flex-start", paddingVertical: 5 }}>

                                                <View style={{ flex: 1, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 10 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.extra_large} title={"9021394928"} />
                                                </View>

                                          </View>
                                    </View>

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Your Information"} />
                                                </View>
                                          </View>
                                          <Pressable  android_ripple={{color:COLORS.primaryGray }} onPress={() => navigation.navigate(SCREEN_IDENTIFIER.OrderHistory.identifier as never)}>
                                                <View style={{ flex: 1, padding: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                      <View style={{ flex: 2 }}>
                                                            <FMIcon name="bag-shopping" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                      </View>
                                                      <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                            <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Your Orders"} />
                                                      </View>
                                                      <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                            <Icon name="arrow-forward-ios" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                      </View>
                                                </View>
                                          </Pressable>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FMIcon name="location-arrow" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Address book"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                    </View>

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Other Information"} />
                                                </View>
                                          </View>

                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FMIcon name="share-nodes" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Share the app"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FMIcon name="location-arrow" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"About us"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FMIcon name="bell" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Notification Settings"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FMIcon name="power-off" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Logout"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={screenRatio*14} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                    </View>
                              </View>
                        </ScrollView>
                  </SafeAreaView>
            </View>
      );
};
export default Profile;

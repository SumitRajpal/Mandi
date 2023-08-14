import { FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { DefaultLabel } from "src/components";
import { screenHeight, screenRatio } from "src/constants";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import FMIcon from 'react-native-vector-icons/FontAwesome5';
const PaymentOption = (): JSX.Element => {
      const defaultStyles = StyleSheet.create({
            container: {
                  flex: 1,
                  backgroundColor: COLORS.white
            },
            bill: {
                  flex: 1,
                  shadowColor: COLORS.primaryGray,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: COLORS.primaryGray,
                  shadow: {
                        ...Platform.select({
                              android: {
                                    elevation: 5,
                                    shadowColor: COLORS.primaryGreen,
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
                  }, marginBottom: 10,
                  marginTop: 10

            }
      });

      return (
            <View style={defaultStyles.container} >
                  <SafeAreaView style={defaultStyles.container}>
                        <ScrollView style={defaultStyles.container}>
                              <View style={{ paddingHorizontal: 10 }}>
                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"UPI"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <Image
                                                            style={{ flex: 1 }}
                                                            source={{ uri: 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png' }}
                                                      />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0.5, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Paytm"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                <Image
                                                            style={{ flex: 1 }}
                                                            source={{ uri: 'https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png' }}
                                                      />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0.5, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"GooglePe"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                <Image
                                                            style={{ flex: 1 ,
                                                            resizeMode: 'contain'}}
                                                            
                                                            source={{ uri: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png' }}
                                                      />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0.5, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"PhonePe"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                    </View>

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Pay Later"} />
                                                </View>
                                          </View>

                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FMIcon name="calendar-week" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0.5, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Pay Weekly"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0.5, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Pay Monthly"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                    </View>

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Pay on Delivery"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 2 }}>
                                                      <FIcon name="money" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16, borderBottomWidth: 0.5, borderColor: COLORS.primaryGray }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Cash on Delivery"} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "flex-end" }}>
                                                      <Icon name="arrow-forward-ios" size={16} color={COLORS.tertiaryGray} />
                                                </View>
                                          </View>
                                    </View>
                              </View>
                        </ScrollView>
                  </SafeAreaView>
            </View>
      );
};
export default PaymentOption;

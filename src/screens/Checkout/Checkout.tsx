import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import CartList from "src/components/Products/CartList";
import Footer from "src/components/footer";
import { DefaultLabel } from "src/components";
import { screenHeight, screenRatio } from "src/constants";
import Icon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/Fontisto';
import CheckoutFooter from "src/components/CheckoutFooter";
import Header from "src/components/header";
const Checkout = (): JSX.Element => {
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
                  }, marginBottom: screenHeight / 10,
                  marginTop: 10

            }
      });

      return (
            <View style={defaultStyles.container} >
                  <SafeAreaView style={defaultStyles.container}>
                        <ScrollView style={defaultStyles.container}>
                              <Header title="Checkout"/>
                              <View style={{ paddingHorizontal: 10 }}>
                                    <CartList />

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Bill Details"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical:5,flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 1 }}>
                                                      <Icon name="news" size={12} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16 }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Item Total"} />
                                                </View>
                                                <View style={{ flex: 4 ,alignItems:"flex-end"}}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"985"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical:5,flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 1 }}>
                                                      <MIcon name="bike-fast" size={12} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16 }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Delivery Charges"} />
                                                </View>
                                                <View style={{ flex: 4,alignItems:"flex-end" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"15"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical:5,flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 1 }}>
                                                      <SIcon name="shopping-bag" size={12} color={COLORS.tertiaryGray} />
                                                </View>
                                                <View style={{ flex: 16 }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Packing charges"} />
                                                </View>
                                                <View style={{ flex: 4,alignItems:"flex-end" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"985"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical:10,flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                
                                                <View style={{ flex: 16 }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.medium} title={"Grand Total"} />
                                                </View>
                                                <View style={{ flex: 4,alignItems:"flex-end" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.medium} title={"97520"} />
                                                </View>
                                          </View>
                                          
                                    </View>
                              </View>
                        </ScrollView>
                        <CheckoutFooter />
                  </SafeAreaView>
            </View>
      );
};
export default Checkout;

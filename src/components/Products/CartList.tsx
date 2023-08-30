
import React, { ReactNode, useEffect, useState } from "react";
import { ActivityIndicator, Modal, Platform, ScrollView, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import DefaultCategory from "../DefaultCategory";
import ProductListItem from "../ProductListItem";
import Icon from 'react-native-vector-icons/AntDesign';
import StockOutProductList from "../StockOutProductList";
import { DefaultLabel } from "src/components";
import { screenHeight } from "src/constants";


const defaultStyle = StyleSheet.create({
      container: {
            flex: 1.0,
            height: "auto"
      },
      parent: {
            marginVertical: 5
      },
      outstock: {
            flex: 1,
            shadowColor: COLORS.primaryRed,
            borderRadius: 10,
            marginVertical: 5,
            borderWidth: 0.4,
            borderColor: COLORS.primaryRed,
            shadow: {
                  ...Platform.select({
                        android: {
                              elevation: 5,
                              shadowColor: COLORS.primaryRed,
                        },
                        ios: {
                              shadowColor: COLORS.primaryRed,
                              shadowOpacity: 5,
                              shadowRadius: 5,
                              shadowOffset: { width: 4, height: 4 }
                        }
                  }),
                  backgroundColor: COLORS.primaryRed,
                  borderRadius: 4
            }

      },
      savings: {
            flex: 1,
            shadowColor: COLORS.primaryBlue,
            borderRadius: 10,
            marginVertical: 5,
            borderWidth: 0.4,
            borderColor: COLORS.primaryBlue,
            shadow: {
                  ...Platform.select({
                        android: {
                              elevation: 5,
                              shadowColor: COLORS.primaryBlue,
                        },
                        ios: {
                              shadowColor: COLORS.primaryBlue,
                              shadowOpacity: 5,
                              shadowRadius: 5,
                              shadowOffset: { width: 4, height: 4 }
                        }
                  }),
                  backgroundColor: COLORS.primaryBlue,
                  borderRadius: 4
            }

      },
      cart: {
            flex: 1,
            shadowColor: COLORS.primaryGreen,
            borderRadius: 10,
            marginVertical: 5,
            borderWidth: 0.4,
            borderColor: COLORS.primaryGreen,
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
            }
   
      }

});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const CartList = (): JSX.Element =>
      <View style={{ flex: 1 , marginTop:10}}>

            <View style={defaultStyle.outstock}>
                  <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.secondaryRed, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryRed }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Sorry! 2 items are out of stock"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <Icon style={{ color: COLORS.tertiaryGray }} name="closecircle" size={20} color={COLORS.text_black} />

                        </View>
                  </View>
                  <View style={{ flex: 1, margin: 5 }}>
                        <StockOutProductList />
                  </View>

                  <View style={{ flex: 1, margin: 5 }}>
                        <StockOutProductList />
                  </View>
            </View>
            <View style={defaultStyle.savings}>
                  <View style={{ borderRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.tertiaryBlue, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryBlue }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Your total savings"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryBlue }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"₹2898"} />
                        </View>
                  </View>
            </View>

            <View style={defaultStyle.cart}>
                  <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.secondaryBlue, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryGreen }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Cart"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryGreen }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"₹2651"} />
                        </View>
                  </View>
                  <View style={{ flex: 1, margin: 5 }}>
                        <ProductListItem />
                  </View>
                  <View style={{ flex: 1, margin: 5 }}>
                        <ProductListItem />
                  </View>

                  <View style={{ flex: 1, margin: 5 }}>
                        <ProductListItem />
                  </View>

            </View>
      </View>

export default CartList;

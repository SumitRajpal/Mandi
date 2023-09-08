
import React, { ReactNode, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Modal, Platform, ScrollView, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import DefaultCategory from "../DefaultCategory";
import ProductListItem from "../ProductListItem";
import Icon from 'react-native-vector-icons/AntDesign';
import StockOutProductList from "../StockOutProductList";
import { DefaultLabel, HistoryListItem } from "src/components";
import { WEB_SERVICES, screenHeight } from "src/constants";
import { api } from "src/api/http";
import { useQuery } from "@tanstack/react-query";


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
            shadowColor: COLORS.black,
            borderRadius: 10,
            marginVertical: 5,
            borderWidth: 0.4,
            borderColor: COLORS.tertiaryGray,
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
interface ICartHistoryList {
      data?:any
}
const CartHistoryList = (props:ICartHistoryList): JSX.Element => {
      const {data} = props

      return (<View style={{ flex: 1, marginTop: 10 }}>

            <View style={defaultStyle.cart}>
                  <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.primaryGray, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Order Summary"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={""} />
                        </View>
                  </View>
                  <View style={{ flex: 1 }}>
                        

                        <FlatList
                               scrollEnabled={false}
                              data={data?.invoice_cart_details}
                              numColumns={1}
                              contentContainerStyle={{paddingHorizontal:5,}}
                              showsHorizontalScrollIndicator={true}
                              keyExtractor={(item, index) => item?.id + index.toString()}
                              renderItem={({ item }) => item && <View style={{flex:1, paddingVertical:5}}><HistoryListItem data={item}/></View>}
                        />
                  </View>

            </View>
      </View>)
}

export default CartHistoryList;


import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Modal, Platform, ScrollView, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import ProductListItem from "src/components/ProductListItem";
import Icon from 'react-native-vector-icons/AntDesign';
import StockOutProductList from "src/components/StockOutProductList";
import { DefaultLabel } from "src/components";
import { WEB_SERVICES, screenHeight } from "src/constants";
import { useQuery } from "@tanstack/react-query";
import { api } from "src/api/http";
import EIcon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/Fontisto';


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
/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface ICartList {
      product_id: Array<string>
      showSaving?: boolean,
      localCart: any,
      showBill?: boolean,
      onResponse: (value: any) => typeof value

}
const CartList = (props: ICartList): JSX.Element => {
      const { onResponse, product_id = [], showBill = false, showSaving = false, localCart = {} } = props
      const fetchCart = () => api(
            {
                  url: WEB_SERVICES.cart.getCart,
                  method: WEB_SERVICES.method.GET,
                  params: {
                        filter: { product_id: product_id },
                  }
            }
      );
      const { isLoading, data: cartListData, refetch, } = useQuery(["getCartList"],
            fetchCart,
            {
                  enabled: product_id.length > 1,
                  onError: () => {

                  },
                  onSuccess: (response: any) => {


                  }
            }
      );

      useEffect(() => {
            refetch;
      }, [localCart, product_id, showSaving])


      const stockList = useMemo(() => cartListData?.rows.filter((data: any) => 
            data?.product_inventory?.quantity > localCart[data?.product_id]?.quantity
           
      ), [cartListData, product_id]);
      
      const outOfStockCartList = useMemo(() => cartListData?.rows.filter((data: any) => data?.product_inventory?.quantity < localCart[data?.product_id]?.quantity), [cartListData, product_id]);

      const totalPrice = useMemo(() => cartListData?.rows?.reduce((partialSum: number, accumulator: any) => partialSum + (accumulator.price[0]?.price * localCart[accumulator?.product_id]?.quantity), 0), [cartListData, product_id]);
      const totalItem = useMemo(() => cartListData?.rows?.reduce((partialSum: number, accumulator: any) => (partialSum + localCart[accumulator?.product_id]?.quantity), 0), [cartListData, product_id]);

      const amountAfterDicount = useMemo(() => cartListData?.rows?.reduce((partialSum: number, accumulator: any) => partialSum + ((100 - accumulator?.product_offer[0]?.discount) / 100) * (accumulator.price[0]?.price * localCart[accumulator?.product_id]?.quantity), 0), [cartListData, product_id]);

      useMemo(() => onResponse(stockList), [cartListData, product_id]);
      return (<View style={{ flex: 1, marginTop: 10 }}>
            {!!outOfStockCartList?.length && <View style={defaultStyle.outstock}>
                  <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.secondaryRed, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryRed }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Sorry! 2 items are out of stock"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <Icon style={{ color: COLORS.tertiaryGray }} name="closecircle" size={20} color={COLORS.text_black} />

                        </View>
                  </View>


                  <FlatList
                        scrollEnabled={false}
                        data={outOfStockCartList}
                        numColumns={1}
                        showsHorizontalScrollIndicator={true}
                        keyExtractor={(item, index) => item?.id + index.toString()}
                        renderItem={({ item }) => item && <View style={{ flex: 1, margin: 5 }}>
                              <StockOutProductList data={item} />
                        </View>}
                  />
            </View>}
           

            {!!stockList?.length && <View style={defaultStyle.cart}>
                  <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.secondaryBlue, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryGreen }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Cart"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryGreen }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={`₹${amountAfterDicount}`} />
                        </View>
                  </View>
                  <FlatList
                        scrollEnabled={false}
                        data={stockList}
                        numColumns={1}
                        showsHorizontalScrollIndicator={true}
                        keyExtractor={(item, index) => item?.id + index.toString()}
                        renderItem={({ item }) => item && <View style={{ flex: 1, margin: 5 }}>
                              <ProductListItem data={item} />
                        </View>}
                  />

            </View>}
            {showSaving && <View style={defaultStyle.savings}>
                  <View style={{ borderRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.tertiaryBlue, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryBlue }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Your total savings"} />
                        </View>
                        <View style={{ flex: 2, alignItems: "flex-end", alignContent: "center", height: "100%" }}>
                              <DefaultLabel styles={{ color: COLORS.primaryBlue }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={`₹${totalPrice - amountAfterDicount}`} />
                        </View>
                  </View>
            </View>}
            {showBill && <View style={defaultStyles.bill} >
                  <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                        <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Bill Details"} />
                        </View>
                  </View>
                  <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                              <EIcon name="news" size={12} color={COLORS.tertiaryGray} />
                        </View>
                        <View style={{ flex: 16 }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Item Total"} />
                        </View>
                        <View style={{ flex: 4, alignItems: "flex-end" }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={totalItem} />
                        </View>
                  </View>
                  <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                              <MIcon name="bike-fast" size={12} color={COLORS.tertiaryGray} />
                        </View>
                        <View style={{ flex: 16 }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Delivery Charges"} />
                        </View>
                        <View style={{ flex: 4, alignItems: "flex-end" }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"0"} />
                        </View>
                  </View>
                  <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                              <SIcon name="shopping-bag" size={12} color={COLORS.tertiaryGray} />
                        </View>
                        <View style={{ flex: 16 }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Packing charges"} />
                        </View>
                        <View style={{ flex: 4, alignItems: "flex-end" }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"0"} />
                        </View>
                  </View>
                  <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>

                        <View style={{ flex: 16 }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.medium} title={"Grand Total"} />
                        </View>
                        <View style={{ flex: 4, alignItems: "flex-end" }}>
                              <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.medium} title={`${amountAfterDicount}`} />
                        </View>
                  </View>

            </View>}
      </View>)
}
export default CartList;

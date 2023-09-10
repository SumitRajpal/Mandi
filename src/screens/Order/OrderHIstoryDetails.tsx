import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext, useMemo } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, DefaultLabel } from "src/components";
import { SCREEN_IDENTIFIER, STORAGE_KEYS, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
import Icon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/Fontisto';
import Header from "src/components/header";
import CartHistoryList from "src/components/Products/CartHistoryList";
import { api } from "src/api/http";
import { useQuery } from "@tanstack/react-query";
import { useNavigation, useRoute } from "@react-navigation/native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { AuthContext } from "src/context/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
const OrderHistoryDetails = (): JSX.Element => {
      const {setCart } = useContext(AuthContext);
        let route:any = useRoute();
          const navigation = useNavigation();
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
                  }, marginBottom:10,
                  marginTop: 10

            }
      });
      const fetchHistoryById = () => api({ url: `${WEB_SERVICES.invoice.getInvoice}/${route?.params?.invoice_id}`});

      const { isLoading, data: orderHistoryData } =
            useQuery(["fetchHistoryById"],
                  fetchHistoryById,
                  {
                        onError: () => {

                        }
                  }
            );
            const totalItem = useMemo(() => orderHistoryData?.invoice_cart_details.reduce((partialSum: number, accumulator: any) => (partialSum + accumulator?.quantity), 0), [orderHistoryData]);

      return (
            <View style={defaultStyles.container} >
                 <SafeAreaView style={defaultStyles.container}>
                        <ScrollView style={defaultStyles.container}>
                              <Header title="" />
                              { isLoading ?  <View
            style={{ flex:1,backgroundColor: COLORS.white, paddingVertical: 10 }}>
            <SkeletonPlaceholder  borderRadius={4} >
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                
                <SkeletonPlaceholder.Item marginLeft={20}>
                  <SkeletonPlaceholder.Item width={screenWidth/1.2} height={40} borderRadius={10} />

                  <SkeletonPlaceholder.Item flexDirection="column" alignItems="flex-start">
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                </SkeletonPlaceholder.Item>

                  <SkeletonPlaceholder.Item marginTop={20} width={screenWidth / 1.26} height={150} />

                  <SkeletonPlaceholder.Item marginTop={20} width={screenWidth / 1.26} height={150} />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder>
            
          </View> : <View style={{ paddingHorizontal: 10 }}>
                                    <CartHistoryList data={orderHistoryData} />

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Bill Details"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                                <View style={{ flex: 1 }}>
                                                      <Icon name="news" size={12} color={COLORS.tertiaryGray} />
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
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.medium} title={`${orderHistoryData?.grand_total}`} />
                                                </View>
                                          </View>

                                    </View>

                                    <View style={defaultStyles.bill}>
                                          <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, flex: 1, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white, padding: 10 }}>
                                                <View style={{ flex: 6, alignItems: "flex-start", alignContent: "center" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"Order Details"} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, gap:5,flexDirection: "column", justifyContent: "flex-start", alignContent: "flex-start", alignItems: "flex-start" }}>
                                                
                                                <View style={{ flex: 4,alignItems: "flex-start" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Payment"} />
                                                </View>
                                                <View style={{ flex: 4, alignItems: "flex-start" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={orderHistoryData?.invoice_payment?.mode} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, gap:5,flexDirection: "column", justifyContent: "flex-start", alignContent: "flex-start", alignItems: "flex-start" }}>
                                                
                                                <View style={{ flex: 4,alignItems: "flex-start" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Delivered at"} />
                                                </View>
                                                <View style={{ flex: 4, alignItems: "flex-start" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={`${orderHistoryData?.invoice_address?.address_1}, ${orderHistoryData?.invoice_address?.address_2}, ${orderHistoryData?.invoice_address?.landmark}`} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5, gap:5,flexDirection: "column", justifyContent: "flex-start", alignContent: "flex-start", alignItems: "flex-start" }}>
                                                
                                                <View style={{ flex: 4,alignItems: "flex-start" }}>
                                                      <DefaultLabel styles={{ color: COLORS.tertiaryGray }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={"Order Placed"} />
                                                </View>
                                                <View style={{ flex: 4, alignItems: "flex-start" }}>
                                                      <DefaultLabel styles={{ color: COLORS.text_black }} weight={FONT_WEIGHT.roman} size={FONT_SIZE.medium} title={orderHistoryData?.invoice_date} />
                                                </View>
                                          </View>
                                    </View>
                              </View>}
                        </ScrollView>
                       { !isLoading && <View style={{padding:screenRatio * 10}}>
                              <Button style={{}}
                                    title="Reorder" onPress={() => {
                                          let  reorderObject:any = {};
                                          orderHistoryData?.invoice_cart_details?.map((value:any) => {
                                                reorderObject[value.product_id]={product_id:value?.product_id,quantity:value?.quantity,image:value?.cart_details_product?.image}
                                          })
                                          AsyncStorage.removeItem(STORAGE_KEYS.cart_details).then(()=>{
                                                setCart(reorderObject)
                                                
                                          }).finally(()=>{
                                                navigation.navigate(SCREEN_IDENTIFIER.Checkout.identifier as never)
                                          })
                                          
                                          }
                                    } />
                        </View>}
                  </SafeAreaView>
            </View>
      );
};
export default OrderHistoryDetails;

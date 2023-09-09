
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FlatList, Image, Modal, Platform, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SCREEN_IDENTIFIER, STORAGE_KEYS, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, DefaultLabel, ProgressView, Text } from "src/components";
import Icon from 'react-native-vector-icons/FontAwesome6';
import DefaultImage from "src/components/DefaultImage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "src/screens";
import { api } from "src/api/http";
import { useMutation, useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "src/context/AuthProvider";

interface IHistoryItems {
      data?: any
}
const OrderHistoryItems = (props: IHistoryItems): JSX.Element => {
      const {setCart } = useContext(AuthContext);
      const { data } = props;
      type StackNavigation = StackNavigationProp<StackParamList>;
      const navigation = useNavigation<StackNavigation>();
      const defaultStyles = StyleSheet.create(
            {
                  image: {
                        maxWidth: screenRatio * 50,
                        height: screenRatio * 50,
                        borderRadius: 10,
                        backgroundColor: COLORS.white,
                        borderWidth: 0.4,
                        marginHorizontal: screenRatio * 5,
                        borderColor: COLORS.secondaryGray
                  },
                  parent: {
                        flex: 1,
                        shadowColor: COLORS.secondaryGray,
                        borderRadius: 10,
                        marginVertical: 5,
                        borderWidth: 1,
                        borderColor: COLORS.primaryGray,
                        shadow: {
                              ...Platform.select({
                                    android: {
                                          elevation: 5,
                                          shadowColor: COLORS.secondaryGray,
                                    },
                                    ios: {
                                          shadowColor: COLORS.secondaryGray,
                                          shadowOpacity: 5,
                                          shadowRadius: 5,
                                          shadowOffset: { width: 4, height: 4 }
                                    }
                              }),
                              backgroundColor: COLORS.secondaryGray,
                              borderRadius: 4
                        }

                  },
            }
      );

      const {mutate:getInvoiceById,isLoading} = useMutation(
            () =>
                  api({
                        url: `${WEB_SERVICES.invoice.getInvoice}/${data?.invoice_id}`,
                        method: WEB_SERVICES.method.GET,
                  }),
            {
                  onSuccess: (response: any) => {
                        let reorderObject: any = {};
                        response?.invoice_cart_details?.map((value: any) => {
                              reorderObject[value.product_id] = { product_id: value?.product_id, quantity: value?.quantity }
                        })
                        AsyncStorage.removeItem(STORAGE_KEYS.cart_details).then(() => {
                              setCart(reorderObject)

                        }).finally(() => {
                              navigation.navigate(SCREEN_IDENTIFIER.Checkout.identifier as never)
                        })
                  },
                  onError: (error: any) => {

                  }
            }
      );
      return (
            <View style={defaultStyles.parent}>
                  <View style={{ flex: 1, flexDirection: "column", gap: 20, backgroundColor: COLORS.white, borderRadius: screenRatio * 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_IDENTIFIER.OrderHistoryDetails.identifier, { invoice_id: data?.invoice_id })} >
                              <View style={{ flex: 4, paddingVertical: 20 }}>
                                    <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                                          <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ flex: 1, borderRadius: 15, padding: 15, backgroundColor: COLORS.tertiaryGreen }}>
                                                      <Icon name="check" size={screenRatio * 15} color={COLORS.primaryGreen} />
                                                </View>
                                          </View>
                                          <View style={{ flex: 7, alignItems: "flex-start", justifyContent: "center", alignContent: "center" }}>
                                                <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", padding: 5, alignContent: "flex-start" }}>
                                                      <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
                                                            <DefaultLabel weight={FONT_WEIGHT.black} size={FONT_SIZE.large} title={"Delivered in 14 minutes"} />
                                                      </View>
                                                      <View style={{ flex: 1 }}>
                                                            <DefaultLabel weight={FONT_WEIGHT.medium} size={FONT_SIZE.small} title={`₹${data?.grand_total} 17 Jul, 4:04 pm`} />
                                                      </View>
                                                </View>
                                          </View>
                                          <View style={{ flex: 1, alignItems: "center", alignContent: "center", alignSelf: "center" }}>
                                                <Icon name="arrow-right" size={20} color={COLORS.text_black} />
                                          </View>
                                    </View>
                              </View>
                              <View style={{ flex: 6, alignContent: "center", alignItems: "center" }}>
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                          <View style={{ flex: 1, paddingHorizontal: 0 }}>
                                                <View style={{ flex: 1, gap: 10, padding: 0, flexDirection: "column" }}>

                                                      <FlatList
                                                            scrollEnabled={false}
                                                            data={data?.invoice_cart_details}
                                                            numColumns={5}
                                                            contentContainerStyle={{ marginHorizontal: 10 }}
                                                            showsHorizontalScrollIndicator={false}
                                                            keyExtractor={(item, index) => item?.id + index.toString()}
                                                            renderItem={({ item }) => item &&
                                                                  <DefaultImage styles={defaultStyles.image} imageUri={item?.cart_details_product?.image} />
                                                            }
                                                      />
                                                </View>
                                          </View>

                                    </View>
                              </View>
                        </TouchableOpacity>
                        <View style={{ flex: 4, padding: 10, alignContent: "center", alignItems: "center", borderColor: COLORS.primaryGray, borderTopWidth: 0.2 }}>
                           { isLoading ? <ProgressView/>: <TouchableOpacity onPress={() => { getInvoiceById() }}>
                                    <View style={{ flex: 1 }}>
                                          <DefaultLabel styles={{ color: COLORS.primaryGreen }} weight={FONT_WEIGHT.regular3} size={FONT_SIZE.regular} title={"Reorder"} />
                                    </View>
                              </TouchableOpacity>}
                        </View>
                  </View>

            </View>);
}
export default OrderHistoryItems;

import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import CartList from "src/components/Products/CartList";
import { DefaultLabel } from "src/components";
import { screenHeight, screenRatio } from "src/constants";
import Icon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SIcon from 'react-native-vector-icons/Fontisto';
import CheckoutFooter from "src/components/CheckoutFooter";
import Header from "src/components/header";
import { AuthContext } from "src/context/AuthProvider";
const Checkout = (): JSX.Element => {
      const { getCart } = useContext(AuthContext);
      const [getCartData, setCartData] = useState({});
      const [cartResponse, setCartResponse] = useState({});
     
      useEffect(() => {
            async function getData() {
                  const result = await getCart();
                  setCartData(result)
            }
            getData();
      }, [getCartData]);
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
                              <Header title="Checkout" />
                              <View style={{ paddingHorizontal: 10 }}>
                                   {getCartData &&  <CartList onResponse={(res) => {} }showBill localCart={getCartData} showSaving product_id={Object.keys(getCartData)} />}
                              </View>
                        </ScrollView>
                        {getCartData &&  <CheckoutFooter localCart={getCartData}  product_id={Object.keys(getCartData)} />}
                  </SafeAreaView>
            </View>
      );
};
export default Checkout;

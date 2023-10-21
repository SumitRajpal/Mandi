import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useMemo } from "react";
import { Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import CheckoutFooter from "src/components/CheckoutFooter";
import CartList from "src/components/Products/CartList";
import Header from "src/components/header";
import { screenHeight } from "src/constants";
import { COLORS } from "src/constants/font";
import { CartStore } from "src/context/AuthProvider";
import { StackParamList } from "..";
const Checkout = (): JSX.Element => {
      
      const cart = CartStore((state:any) => state.cart )
      const { cartObject } = CartStore((state) => {
            return { cartObject: state.cart };
        });
      type StackNavigation = StackNavigationProp<StackParamList>;
      const navigation = useNavigation<StackNavigation>();
  
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

      const cartMemo = useMemo(() => cart, [cart]);
      console.log(cartMemo,"memo,checkout")

      return (
            <View style={defaultStyles.container} >
                  <SafeAreaView style={defaultStyles.container}>
                        <ScrollView style={defaultStyles.container}>
                              <Header title="Checkout" />
                              <View style={{ paddingHorizontal: 10 }}>
                                    {!!Object.keys(cartMemo)?.length && <CartList onResponse={(res) => { }} showBill localCart={cartMemo} showSaving product_ids={Object.keys(cartMemo)} />}
                              </View>
                        </ScrollView>
                        {!!Object.keys(cartMemo)?.length && <CheckoutFooter localCart={cartMemo} product_ids={Object.keys(cartMemo)} />}
                  </SafeAreaView>
            </View>
      );
};
export default Checkout;

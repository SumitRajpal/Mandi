
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Linking, Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, Text } from "src/components";
import { SCREEN_IDENTIFIER, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
import DefaultImage from "src/components/DefaultImage";
import { useNavigation } from "@react-navigation/native";
import PaymentModel from "src/components/PaymentModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "src/screens";
import { api } from "src/api/http";
import { useQuery } from "@tanstack/react-query";

const defaultStyles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 10,
    backgroundColor: COLORS.secondaryWhite,
    padding: 0,
    borderRadius: 15,
    width: screenWidth,
    height: screenHeight / 12,

  },
  footerBasis: {
    flex: 3,
    gap: screenRatio * 10,
  },
  selectpayment: {
    flex: 2,
    gap: screenRatio * 10,
  },
  footerFlex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: screenRatio * 5,
    width: screenWidth,
    height: screenHeight / 11,

  },
  text: {
    flex: 1,
    letterSpacing: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlignVertical: "center"
  },
  image: {
    borderRadius: 10,
    width: 36,
    padding: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.4,
    borderColor: COLORS.secondaryGray
  }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface ICheckoutFooter{
  product_id?:Array<string>
  localCart: any,
}
const CheckoutFooter = (props:ICheckoutFooter): JSX.Element => {
  const {product_id=[],localCart={}} = props;
  const [model, setModel] = useState<boolean>(false);
  type StackNavigation = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackNavigation>();

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
            refetch();
      }, [product_id,localCart])
      const amountAfterDicount = useMemo(() => cartListData?.rows?.reduce((partialSum: number, accumulator: any) => partialSum + ((100 - accumulator?.product_offer[0]?.discount) / 100) * (accumulator.price[0]?.price * localCart[accumulator?.product_id]?.quantity), 0), [cartListData, product_id]);

  return (
    <View style={defaultStyles.footerContainer}>
      <View style={defaultStyles.footerFlex}>
        <View style={defaultStyles.selectpayment}>
          <TouchableOpacity style={{ flex: 1}} onPress={() => setModel(!model)}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1}}>
              <View style={{ flex: 1, gap:0,flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <DefaultImage styles={defaultStyles.image} imageUri={"https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png"} />
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={[defaultStyles.text]}
                size={FONT_SIZE.medium}
                isPoppins={true}
                numberOfLines={1}
                weight={FONT_WEIGHT.medium}
                color={COLORS.text_black}
              > 
                {"Paying by "}
              </Text>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <View style={defaultStyles.footerBasis}>
       {isLoading ?  
       
       
       <Button style={{}}
          
            title="Loading . . . " 
            onPress={()=> {}} />:
       <Button style={{}}
          
            title={`₹${amountAfterDicount}    Place order`} onPress={() => {navigation.navigate(SCREEN_IDENTIFIER.Checkout.identifier as never)
            Linking.openURL(`paytmmp://pay?pa=916306150790@paytm&pn=DrishtiAhuja&tn=Note&am=${amountAfterDicount}&cu=INR`).then(value => {
              console.log(value)
            }).catch(error => {console.log(error,"error")});
            }} /> }
        </View>
      </View>
      <PaymentModel visible={model} height={"100%"}  onModelClose={(value) => setModel(value)}/>

    </View>);
}

// tez://upi/pay?pa=piyush.rajpal08@okhdfcbank&pn=Piyush Rajpal&tn=Testing&am=1&cu=INR'

export default CheckoutFooter;

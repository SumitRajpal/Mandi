
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Linking, Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, DefaultLabel, Text } from "src/components";
import { SCREEN_IDENTIFIER, screenHeight, screenRatio, screenWidth } from "src/constants";
import ProductListItem from "./ProductListItem";
import DefaultImage from "./DefaultImage";
import CartListModel from "./CartListModel";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "src/context/AuthProvider";

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
    height: screenRatio * (screenHeight / 16),

  },
  footerBasis: {
    flex: 1,
    gap: screenRatio * 10,
  },
  footerFlex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: screenRatio * 5,
    width: screenWidth,
    height: screenRatio * (screenHeight / 11),

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
    width: screenRatio * 36,
    height: screenRatio * 36,
    padding: screenRatio * 5,
    backgroundColor: COLORS.white,
    borderWidth: screenRatio * 0.4,
    borderColor: COLORS.secondaryGray
  }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const Footer = (): JSX.Element => {
  const { getCart } = useContext(AuthContext);
  const [getCartData, setCartData] = useState({});
  const [totalItem, setTotalItem] = useState({});
  const [model, setModel] = useState<boolean>(false);
  const navigation = useNavigation();
  var cartObject: any = getCartData || {}


  useEffect(() => {
    async function getData() {
      const result = await getCart();
      setCartData(result)
    }
    getData();
    let total: number = 0;
    cartObject = getCartData;
    Object.keys(getCartData)?.map(value => {
      total += cartObject[value]?.quantity;
    })
    setTotalItem(total)
  }, [getCartData])

  return (
    <View style={defaultStyles.footerContainer}>
      <View style={defaultStyles.footerFlex}>
        <View style={defaultStyles.footerBasis}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setModel(!model)}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1, flexShrink: 1, padding: 0 }}>
                <View style={{ flex: 1, gap: - (screenRatio * 10), padding: 5, flexDirection: "row", flexShrink: 1, paddingHorizontal: 20 }}>
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                    <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                  </View>
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                    <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1,alignSelf:"center",alignItems:"center",alignContent:"center" }}>
                <DefaultLabel
                  title={`${totalItem} Items`}
                  size={FONT_SIZE.medium}
                  weight={FONT_WEIGHT.medium}
                />
                  
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={defaultStyles.footerBasis}>
          <Button style={{}}
            title="Next" onPress={() => { navigation.navigate(SCREEN_IDENTIFIER.Checkout.identifier as never) }} />
        </View>
      </View>
      <CartListModel visible={model} height={"100%"} onModelClose={(value) => { setModel(value);}} />

    </View>);
}


export default Footer;


import React, { useState } from "react";
import { ActivityIndicator, Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Text from "./Text";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import Icon from 'react-native-vector-icons/Entypo';
import DefaultLabel from "src/components/DefaultLabel";
import Toast from "react-native-simple-toast";

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface ICartButton {
      onChangeText?: () => void;
      data?: any
}
const CartButton = (props: ICartButton): JSX.Element => {
      const { data } = props

      const defaultStyles = StyleSheet.create({
            container: {
                  flex: 1.0,
                  borderWidth: 1,
                  display: "flex",
                  borderRadius: 10,
                  flexDirection: "column",
                  flexWrap: "wrap",
                  borderColor: COLORS.primaryGreen,
                  backgroundColor: COLORS.secondaryBlue
            },

            cartText: {
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignSelf: "center",
                  textAlign: "center",
                  color: COLORS.primaryGreen,
                  letterSpacing: 0
            },
            outOfStock: {
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignSelf: "center",
                  textAlign: "center",
                  overflow: "visible",
                  color: COLORS.primaryGreen,
                  letterSpacing: 0
            },
            cartFlex: {
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center"
            },
            incdec: {
                  flex: 1,
                  height: "auto",
                  width: "auto",
                  alignItems: "center",

            },
            quanity: {
                  flex: 1,
                  alignItems: "center",
            },
            white: {
                  color: COLORS.secondaryWhite
            }

      });
      const [quantity, setQuantity] = useState(0);
      const cartStyle = StyleSheet.create({
            parentButton: {
                  borderColor: COLORS.primaryGreen,
                  width: "100%",
                  backgroundColor: quantity ? COLORS.primaryGreen : COLORS.secondaryBlue,
                  borderRadius: 5,
                  borderWidth: 1,
                  height: "100%",
            }
      })
      return (
            <View style={cartStyle.parentButton}>
                  {quantity ? <View style={defaultStyles.cartFlex}>
                        <View style={defaultStyles.incdec}>
                              <Icon style={defaultStyles.white} name="minus"
                                    size={screenRatio * 16} color={COLORS.text_black} onPress={() => setQuantity(quantity - 1)} />
                        </View>
                        <View style={defaultStyles.quanity}>
                              <DefaultLabel size={FONT_SIZE.small} weight={FONT_WEIGHT.black} styles={defaultStyles.white} title={quantity} />
                        </View>
                        <View style={defaultStyles.incdec}>
                              <Icon style={defaultStyles.white} name="plus"
                                    size={screenRatio * 16} color={COLORS.text_black} onPress={() => quantity < data?.product_inventory?.quantity ? setQuantity(quantity + 1) : Toast.show("Reached max quantity",5)} />
                        </View>

                  </View> :
                        <TouchableOpacity disabled = {!(!!data?.product_inventory?.quantity)} style={{ flex: 1 }} onPress={() => setQuantity(quantity + 1)}>
                              {data?.product_inventory?.quantity ?
                              < View style={defaultStyles.cartFlex}>
                              <DefaultLabel styles={defaultStyles.cartText} title={"Add"} />
                        </View> :< View style={defaultStyles.cartFlex}>
                              <DefaultLabel size={FONT_SIZE.regular}  styles={defaultStyles.outOfStock} title={"Out of Stock"} />
                        </View>}
            </TouchableOpacity>
                  }
            </View >
      );
}

export default CartButton;

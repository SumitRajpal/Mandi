
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import Icon from 'react-native-vector-icons/Entypo';
import DefaultLabel from "src/components/DefaultLabel";
import Toast from "react-native-simple-toast";
import { AuthContext } from "src/context/AuthProvider";

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface ICartButton {
      onChangeText?: () => void;
      data?: any
}
const CartButton = (props: ICartButton): JSX.Element => {
      const { setCart, getCart } = useContext(AuthContext);
      const [getCartData, setCartData] = useState({});
      let objectData :any  = getCartData || {};

      const { data } = props || {}
      const { product_id } = data ?? {}
      const [quantity, setQuantity] = useState(0);
      useEffect(() => {
            async function getData() {
                  const result = await getCart();
                  setCartData(result)
            }
            getData();
            
      }, [setQuantity])

      useEffect(() => {
            setQuantity(objectData[product_id]?.quantity || 0)
      }, [getCartData])
      

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
                                    size={screenRatio * 16} color={COLORS.text_black} onPress={() => {
                                          objectData[product_id] = { product_id:data.product_id,quantity:quantity - 1,image:data.image }
                                          setCart(objectData)
                                          setQuantity(quantity - 1);
                                        
                                    }} />
                        </View>
                        <View style={defaultStyles.quanity}>
                              <DefaultLabel size={FONT_SIZE.small} weight={FONT_WEIGHT.black} styles={defaultStyles.white} title={quantity} />
                        </View>
                        <View style={defaultStyles.incdec}>
                              <Icon style={defaultStyles.white} name="plus"
                                    size={screenRatio * 16} color={COLORS.text_black} onPress={() => {
                                          if (quantity < data?.product_inventory?.quantity) {
                                                
                                                objectData[product_id] = { product_id:data.product_id,quantity:quantity + 1,image:data.image }
                                                setCart(objectData)
                                                setQuantity(quantity + 1)
                                          }
                                          else { Toast.show("Reached max quantity", 5) }

                                    }} />
                        </View>

                  </View> :
                        <TouchableOpacity disabled={!(!!data?.product_inventory?.quantity)} style={{ flex: 1 }} onPress={() => {
                             
                              objectData[product_id] = { product_id:data.product_id,quantity:quantity + 1,image:data.image }
                              setCart(objectData)
                              setQuantity(quantity + 1);
                            
                        }}>
                              {data?.product_inventory?.quantity ?
                                    < View style={defaultStyles.cartFlex}>
                                          <DefaultLabel styles={defaultStyles.cartText} title={"Add"} />
                                    </View> : < View style={defaultStyles.cartFlex}>
                                          <DefaultLabel size={FONT_SIZE.regular} styles={defaultStyles.outOfStock} title={"Out of Stock"} />
                                    </View>}
                        </TouchableOpacity>
                  }
            </View >
      );
}

export default CartButton;



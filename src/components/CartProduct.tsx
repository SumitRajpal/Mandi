
import React, { useState } from "react";
import { Image, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { AnimatedImage } from "react-native-reanimated/lib/typescript/reanimated2/component/Image";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import {DefaultLabel, Text} from "src/components";
import Icon from 'react-native-vector-icons/Entypo';
import CartButton from "src/components/CartButton";

const defaultStyles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 5,
            gap:10,
            borderWidth:0.2,
            flexDirection: "column",
            borderRadius: 5,
            borderColor:COLORS.secondaryGray,
            margin:5,
            backgroundColor: COLORS.secondaryWhite,
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


      offer: {
            zIndex: 1,
            padding: 5,
            height: screenRatio * (screenHeight/22),
            width: screenRatio * (screenWidth /11),
            position: "absolute",
            backgroundColor: COLORS.action_review,
            top: 0,
            borderBottomEndRadius:screenRatio * 20,
            borderBottomStartRadius:screenRatio * 20,
            left: screenRatio * 8,
            alignItems: "center",
            justifyContent: "space-evenly"

      },
      image: {
            flex: 10,
            padding: screenRatio* (screenWidth/10), 
            
      },
      text: {
            overflow: "hidden",
      },
      strike: { textDecorationLine: 'line-through', textDecorationStyle: 'solid' }

});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IDefaultImage {
      imageStyles?: any,
      styles?: any,
      data:any
}
const CartProduct = (props: IDefaultImage): JSX.Element => {
      const { styles, imageStyles,data } = props
      const discountedPrice  = data?.price[0]?.price * (100 - data?.product_offer?.discount) / 100 || 0
      return (
            <View style={[defaultStyles.container, styles]}>
                  { data?.product_offer?.type ==="PERCENTAGE" ?  
                  <View style={[defaultStyles.offer]}>
                  <DefaultLabel weight={FONT_WEIGHT.heavy} size={FONT_SIZE.small} title={`${data?.product_offer?.discount}%`} />
                        <DefaultLabel weight={FONT_WEIGHT.heavy} size={FONT_SIZE.small} title={"OFF"} />

                  </View> :
                  <View style={[defaultStyles.offer]}>
                        <DefaultLabel weight={FONT_WEIGHT.heavy} size={FONT_SIZE.small} title={`Buy 1`} />
                        <DefaultLabel weight={FONT_WEIGHT.heavy} size={FONT_SIZE.small} title={`Get 2`} />
                  </View>}
                  <View style={{ flex: 6,flexWrap:"wrap" ,alignContent:"center",alignItems:"center"}}>
                        <Image
                              style={[defaultStyles.image,imageStyles]}
                              source={{ uri: data?.image || "https://freepngimg.com/thumb/white%20roses/4-white-rose-png-image-flower-white-rose-png-picture.png" }}
                        />
                  </View>
                  <View style={{ flex: 3, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                        <DefaultLabel weight={FONT_WEIGHT.regular3} size={FONT_SIZE.medium} title={data?.name} />
                  </View>
                  <View style={{ flex: 1, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                        <DefaultLabel weight={FONT_WEIGHT.regular3} size={FONT_SIZE.small} title={data?.weight} />
                  </View>
                  <View style={{ flex: 2.5, flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly" }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                              <View style={{ flex: 3, flexWrap: "wrap" }}>
                                    <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap",justifyContent:"center",alignContent:"space-around" }}>
                                          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                <DefaultLabel weight={FONT_WEIGHT.heavy} size={FONT_SIZE.regular} title={`₹${discountedPrice}`} />
                                          </View>
                                          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                <DefaultLabel styles={defaultStyles.strike} weight={FONT_WEIGHT.regular2} size={FONT_SIZE.regular} title={`₹${data?.price[0]?.price || 0}`} />
                                          </View>
                                    </View>
                              </View>
                              <View style={{ flex: 4, flexWrap: "wrap",justifyContent:"center",alignContent:"center"  }}>
                                    <CartButton data={data} />
                              </View>
                        </View>
                  
                  </View>
            </View>);
}


export default CartProduct;

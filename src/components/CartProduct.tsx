
import React, { useState } from "react";
import { Image, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { AnimatedImage } from "react-native-reanimated/lib/typescript/reanimated2/component/Image";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import {Text} from "src/components";
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
      imageUri: any,
      title: string
}
const CartProduct = (props: IDefaultImage): JSX.Element => {
      const { styles, imageStyles, imageUri = "https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png", title } = props
      return (
            <View style={[defaultStyles.container, styles]}>
                  <View style={[defaultStyles.offer]}>
                        <Label weight={FONT_WEIGHT.regular3} size={FONT_SIZE.large} title={"15%"} />
                        <Label weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"OFF"} />

                  </View>
                  <View style={{ flex: 6,flexWrap:"wrap" ,alignContent:"center",alignItems:"center"}}>
                        <Image
                              style={[defaultStyles.image,imageStyles]}
                              source={{ uri: imageUri }}
                        />
                  </View>
                  <View style={{ flex: 3, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                        <Label weight={FONT_WEIGHT.regular3} size={FONT_SIZE.medium} title={title} />
                  </View>
                  <View style={{ flex: 1, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                        <Label weight={FONT_WEIGHT.regular3} size={FONT_SIZE.small} title={"100gm"} />
                  </View>
                  <View style={{ flex: 2.5, flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly" }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                              <View style={{ flex: 3, flexWrap: "wrap" }}>
                                    <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap",justifyContent:"center",alignContent:"space-around" }}>
                                          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                <Label weight={FONT_WEIGHT.heavy} size={FONT_SIZE.regular} title={"₹1011"} />
                                          </View>
                                          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                <Label lstyles={defaultStyles.strike} weight={FONT_WEIGHT.regular2} size={FONT_SIZE.regular} title={"₹1501"} />
                                          </View>
                                    </View>
                              </View>
                              <View style={{ flex: 4, flexWrap: "wrap",justifyContent:"center",alignContent:"center"  }}>
                                    <CartButton />
                              </View>
                        </View>
                  
                  </View>
            </View>);
}


interface ILABEL {
      title: any
      lstyles?: any
      size?: number
      weight?: number
}
const Label = (props: ILABEL) => {
      const { title, lstyles, size = FONT_SIZE.medium, weight = FONT_WEIGHT.heavy } = props;
      return (
            <Text
                  style={[defaultStyles.text, lstyles]}
                  size={size}
                  isPoppins={true}
                  numberOfLines={2}
                  weight={weight}
                  color={COLORS.text_black}
            >
                  {title}
            </Text>
      );
};
export default CartProduct;

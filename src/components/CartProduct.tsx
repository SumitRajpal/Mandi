
import React, { useState } from "react";
import { Image, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { AnimatedImage } from "react-native-reanimated/lib/typescript/reanimated2/component/Image";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Text from "./Text";
import DefaultImage from "./DefaultImage";
import Icon from 'react-native-vector-icons/Entypo';
import CartButton from "./CartButton";

const defaultStyles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 10,
            flexDirection: "column",
            borderRadius: 10,
            backgroundColor: COLORS.secondaryWhite,
      },


      offer: {
            zIndex: 1,
            padding: 5,
            height: screenRatio * 40,
            width: screenRatio * 40,
            position: "absolute",
            backgroundColor: COLORS.action_review,
            top: 0,
            left: 30,
            alignItems: "center",
            justifyContent: "space-evenly"

      },
      image: {
            flex: 1,
      },
      text: {
            overflow: "hidden",
            lineHeight: 16,
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
      const { styles, imageStyles, imageUri, title } = props
      return (
            <View style={[defaultStyles.container, styles]}>
                  <View style={defaultStyles.offer}>
                        <Label weight={FONT_WEIGHT.regular3} size={FONT_SIZE.large} title={"15%"} />
                        <Label weight={FONT_WEIGHT.heavy} size={FONT_SIZE.large} title={"OFF"} />

                  </View>
                  <View style={{ flex: 6 }}>
                        <Image
                              style={[defaultStyles.image, imageStyles]}
                              source={{ uri: imageUri }}
                        />
                  </View>
                  <View style={{ flex: 2, flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                        <Label weight={FONT_WEIGHT.heavy} size={FONT_SIZE.medium} title={title} />
                        <Label weight={FONT_WEIGHT.regular3} size={FONT_SIZE.large} title={"100gm"} />
                  </View>
                  <View style={{ flex: 0.1, flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly" }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                              <View style={{ flex: 4, flexWrap: "wrap" }}>
                                    <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>
                                          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                <Label weight={FONT_WEIGHT.heavy} size={FONT_SIZE.regular} title={"₹1011"} />
                                          </View>
                                          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                <Label styles={defaultStyles.strike} weight={FONT_WEIGHT.regular2} size={FONT_SIZE.regular} title={"₹1501"} />
                                          </View>
                                    </View>
                              </View>
                              <View style={{ flex: 6, flexWrap: "wrap" }}>
                                    <CartButton />
                              </View>
                        </View>
                  
                  </View>
            </View>);
}


interface ILABEL {
      title: any
      styles?: any
      size?: number
      weight?: number
}
const Label = (props: ILABEL) => {
      const { title, styles, size = FONT_SIZE.medium, weight = FONT_WEIGHT.heavy } = props;
      return (
            <Text
                  style={[defaultStyles.text, styles]}
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

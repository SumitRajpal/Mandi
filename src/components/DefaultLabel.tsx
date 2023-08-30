
import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, Text } from "src/components";


interface ILABEL {
      title: any
      styles?: any
      size?: number
      weight?: number
}
const DefaultLabel = (props: ILABEL): JSX.Element => {
      const { title, styles, size = FONT_SIZE.medium, weight = FONT_WEIGHT.heavy } = props;

      const defaultStyles = StyleSheet.create(
            {
                  text: {
                        flex: 1,
                        overflow: "hidden",
                        lineHeight: 16,
                  }
            }
      );

      return (<Text
                  style={[defaultStyles.text, styles]}
                  size={size}
                  isTranslate={false}
                  isPoppins={true}
                  numberOfLines={2}
                  weight={weight}
                  color={COLORS.text_black}
            >{title} 
            </Text>);
}
export default DefaultLabel;

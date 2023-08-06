import { COLORS, screenHeight, screenRatio, screenWidth } from "src/constants";
import { Text } from "src/components";
import { FONT_SIZE, FONT_WEIGHT } from "src/constants";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      android: {
        elevation: 5
      },
      ios: {
        shadowColor: COLORS.secondaryGray,
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 }
      }
    })
  },
  border: {
    borderColor: COLORS.sky,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 10
  },
  image: {
    height: 15,
    width: 15,
    alignSelf: "center"
  },
  row: {
    flexDirection: "row"
  },
  center: {
    alignSelf: "center"
  }
});

/**
 * Button is Component to render app buttons
 * @property {Any} style - style as per parent view
 * @property {string} title - button title
 * @property {number} size - icon size
 * @property {type} type - 1 or 2
 */
interface IButton {
  title: string,  type?: number,  style: any,
  disabled?:boolean,
  height?: number, onPress: () => void
}

const Button = (props:IButton) => {
  const { type, title, style, height, disabled = false} = props;
  const buttonStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: 10,
      textAlign:"center",
      justifyContent: "center",
      height: screenHeight/16,
      backgroundColor: disabled ? COLORS.secondaryGray:COLORS.primaryGreen
    }})
  return (
    <TouchableOpacity
    disabled={disabled}
    activeOpacity={ 1 }
      {...props}
      style={type === 1 ? [styles.border, style] : [styles.shadow, style]}
    >
      <View style={[buttonStyles.container, height ? { height } : null]}>
        <View style={styles.row}>
          
         <Label title={title} />
         
        </View>
      </View>
    </TouchableOpacity>
  );
};
interface ILABEL {
title:string
}
const Label = (props:ILABEL) => {
  const { title } = props;
  return (
    <Text
      style={[styles.center]}
      size={FONT_SIZE.extra_large}
      isPoppins={true}
      weight={FONT_WEIGHT.medium}
      color={COLORS.white}
    >
      {title}
    </Text>
  );
};

const LabelSky = (props:ILABEL) => {
  const { title } = props;
  return (
    <Text
      style={[styles.center]}
      size={FONT_SIZE.medium}
      weight={FONT_WEIGHT.medium}
      color={COLORS.sky}
    >
      {title}
    </Text>
  );
};

export default Button;

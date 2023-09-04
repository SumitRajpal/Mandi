import { FONT_NAME, FONT_SIZE, FONT_WEIGHT } from "src/constants";
import { LocalizationContext } from "src/context/LocalizationProvider";
import React, { PropsWithChildren, ReactNode, useContext } from "react";
import { Text as RNText, TextProps } from "react-native";
import { COLORS } from "src/constants";

/**
 * Text is Component to render app text with custom font
 * @property {Any} style - style as per parent view
 * @property {string} color - text color
 * @property {string} align - text alignment
 * @property {int} weight - font weight
 * @property {int} size - font size
 */
interface ITextProps {
  weight?: number,
  isTranslate?: boolean,
  isPoppins?: boolean,
  size?: number,
  color?: string,
  children?: ReactNode,
  style?: any,
  numberOfLines?: number
}
const defaultTextValue: ITextProps = {
  style: {},
  isTranslate: true,
  isPoppins: false,
  weight: FONT_WEIGHT.medium,
  color: COLORS.text_black
}
const Text = (props: PropsWithChildren<ITextProps>) => {
  const {
    weight = FONT_WEIGHT.medium,
    isTranslate = true,
    isPoppins = false,
    size = FONT_SIZE.regular,
    color = COLORS.text_black,
    children,
    numberOfLines,
    style = {},
    ...extraProps
  } = props;
  const { getTranslation } = useContext(LocalizationContext);

  function getFont() {
    if (weight === 800) {
      return FONT_NAME.BLACK;
    }
    return FONT_NAME.MEDIUM;
  }

  function getPoppinsFont() {
    if (weight === 100) {
      return FONT_NAME.THIN;
    }
    if (weight === 200) {
      return FONT_NAME.LIGHT;
    }
    if (weight === 300) {
      return FONT_NAME.ROMAN;
    }
    if (weight === 400) {
      return FONT_NAME.MEDIUM;
    }
    if (weight === 500) {
      return FONT_NAME.REGULAR2;
    }
    if (weight === 600) {
      return FONT_NAME.REGULAR3;
    }
    if (weight === 700) {
      return FONT_NAME.HEAVY;
    }

    if (weight === 800) {
      return FONT_NAME.BLACK;
    }
    if (weight === 900) {
      return FONT_NAME.BLACK2;
    }
    return FONT_NAME.MEDIUM;
  }

  function getText() {
    if (children) {
      return isTranslate === false ? children : getTranslation(children);
    }

    return "";
  }

  const fontFamily = isPoppins ? getPoppinsFont() : getFont();
  const fontSize = size;
  const fontColor = color;
  const text = getText();

  return (
    <RNText
      {...extraProps}
      numberOfLines={numberOfLines}
      style={[{ color: fontColor, fontSize, fontFamily }, style]}
    >
      {text}
    </RNText>
  );
};

Text.defaultValue = {
  style: {},
  isTranslate: true,
  isPoppins: false,
  weight: FONT_WEIGHT.regular2,
  color: COLORS.black
};

export default Text;

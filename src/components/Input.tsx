import { COLORS, KEYBOARD_TYPE, screenHeight } from "src/constants";
import { Text } from "src/components";
import {
  FONT_NAME,
  FONT_SIZE,
  FONT_WEIGHT,
  STRING,
  TEXTFILED
} from "src/constants";
import { LocalizationContext } from "src/context/LocalizationProvider";
import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  grediantView: {
    height: screenHeight / 16,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: COLORS.secondaryGray,
    borderWidth: 1,
    flexDirection: "row",
  },
  input: {
    flex: 1.0,
    fontFamily: FONT_NAME.BOLD,
    fontSize: 14,
    color: COLORS.text_black,
  }
  , input_type_1: {
    flex: 1.0,
    fontFamily: FONT_NAME.REGULAR,
    fontSize: 18,
    color: COLORS.black
  },
  commonCenter: {
    alignSelf: "center"
  },
  commonTitle: {
    marginLeft: 1,
    marginBottom: 4
  },
  searchMessage: {
    marginVertical: 2
  }
});

/**
 * Input is Component to render app text input
 * @property {Any} extraStyle - style as per parent view
 * @property {string} label - input title header text
 */
interface IInput {
  label?: string,
  placeholderText?: string,
  secureTextEntry?: boolean,
  isSearch?: boolean,
  value?: string,
  maxLength?: number,
  style?: any,
  border?: any,
  input?: any,
  keyboardType: any,
  onChangeText: (e: any) => void;
}
const Input = (props: IInput) => {
  const {
    label = "",
    placeholderText = "",
    secureTextEntry = false,
    isSearch = false,
    value = "",
    maxLength,
    style = {},
    border = {},
    input = {},
    keyboardType = KEYBOARD_TYPE.deafult
  } = props || {};
  const [open, setOpen] = useState(false);
  const { getTranslation } = useContext(LocalizationContext);

  return (
    <View style={style}>
      {!!label && <Label title={label} />}
      <View style={[styles.grediantView, border]}>
        <TextInput
          {...props}
          keyboardType={keyboardType}
          style={[styles.input, input]}
          placeholderTextColor={COLORS.secondaryGray}
          selectionColor={COLORS.secondaryGray}
          autoCapitalize="none"
          autoCorrect={false}
          allowFontScaling
          maxLength={maxLength || TEXTFILED.MAX}
          placeholder={getTranslation(placeholderText) || ""}
          secureTextEntry={secureTextEntry && !open}
        />
        {/* {isSearch && <SEARCH style={styles.commonCenter} />} */}
      </View>
      {isSearch && value?.length < 3 && value?.length !== 0 && (
        <Text
          style={styles.searchMessage}
          size={FONT_SIZE.extra_small}
          color={COLORS.red}
        >
          {STRING.phone_error_message}
        </Text>
      )}
    </View>
  );
};

const Label = (props: any) => {
  const { title } = props;
  return (
    <Text
      style={styles.commonTitle}
      size={FONT_SIZE.medium}
      weight={FONT_WEIGHT.bold}
      isPoppins
    >
      {title}
    </Text>
  );
};

export default Input;

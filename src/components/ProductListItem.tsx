
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Text from "./Text";
import { screenHeight, screenWidth } from "src/constants";
import DefaultImage from "./DefaultImage";
import CartButton from "./CartButton";

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1.0,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imageContainer: {
    backgroundColor: COLORS.secondaryWhite,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.primaryGray,
    borderRadius: 10
  },

  imageFlexContainer: {
    flex: 2,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"

  },
  textFlexContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  titleContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 10,
    alignContent: "center",
    alignItems: "center",

  },
  titleDetails: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-end",
    alignContent: "space-between",
    justifyContent: "flex-end"
  },
  titleExtraDetails: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-end",
    alignContent: "space-between",
    justifyContent: "flex-end"
  },
  text: {
    flex: 1,
    overflow: "hidden",
    lineHeight: 16,
  }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const ProductListItem = (): JSX.Element =>

  <View style={defaultStyle.container}>
    <View style={defaultStyle.parent}>
      <View style={defaultStyle.imageFlexContainer}>
        <DefaultImage styles={defaultStyle.imageContainer} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />

      </View>
      <View style={defaultStyle.textFlexContainer}>
        <View style={defaultStyle.titleContainer}>
          <View style={defaultStyle.titleDetails}>
            <Label size={FONT_SIZE.medium} weight={FONT_WEIGHT.heavy} title={"Harpic disinfectent cleaner for the home using dgrhrehrhrhrh dherh"} />
          </View>
          <View style={defaultStyle.titleExtraDetails}>
            <View style={{ flex: 1, flexDirection: "row", alignContent: "center" }}>
              <View style={{
                flex: 4, flexWrap: "wrap",
                alignItems: "center",
                alignContent: "flex-start",
                justifyContent: "flex-start"
              }}>
                <Label weight={FONT_WEIGHT.roman} title={"500 ml"} />
                <Label size={FONT_SIZE.regular} weight={FONT_WEIGHT.heavy} title={"₹105"} />
              </View>
              <View style={{
                flex: 2, flexWrap: "wrap",
                alignItems: "flex-end",
                alignContent: "center",
                justifyContent: "flex-end"
              }}>
                <CartButton />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>

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
      style={[defaultStyle.text, styles]}
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


export default ProductListItem;

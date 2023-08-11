
import React, { useState } from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, Text } from "src/components";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import DefaultModel from "./DefaultModel";
import ProductListItem from "./ProductListItem";
import CartList from "./Products/CartList";
import ProductSorting from "./ProductSorting";
import DefaultImage from "./DefaultImage";

const defaultStyles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    elevation: 10,
    backgroundColor: COLORS.secondaryWhite,
    padding: 0,
    borderRadius: 15,
    width: screenWidth,
    height: screenHeight / 12,

  },
  footerBasis: {
    flex: 1,
    gap: screenRatio * 10,
  },
  footerFlex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: screenRatio * 5,
    width: screenWidth,
    height: screenHeight / 11,

  },
  text: {
    flex: 1,
    letterSpacing: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlignVertical: "center"
  },
  image: {
    borderRadius: 10,
    width: 46,
    padding: 5,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.secondaryGray
  }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const Footer = (): JSX.Element => {
  const [model, setModel] = useState<boolean>(false);

  return (
    <View style={defaultStyles.footerContainer}>
      <View style={defaultStyles.footerFlex}>
        <View style={defaultStyles.footerBasis}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, flexShrink: 1, padding:0 }}>
              <View style={{ flex: 1, gap:-20, padding:5,flexDirection: "row", flexShrink: 1, paddingHorizontal: 20 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                </View><View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                  <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={[defaultStyles.text]}
                size={FONT_SIZE.large}
                isPoppins={true}
                numberOfLines={1}
                weight={FONT_WEIGHT.medium}
                color={COLORS.text_black}
              >
                {"46 Items"}
              </Text>
            </View>
          </View>
        </View>

        <View style={defaultStyles.footerBasis}>
          <Button style={{}}
            title="Next" onPress={() => console.log("fef")} />

        </View>
      </View>
      <ProductSorting visible={model} height={"100%"} />

    </View>);
}


export default Footer;

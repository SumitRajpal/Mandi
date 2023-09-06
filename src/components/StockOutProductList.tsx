
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Text from "./Text";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import DefaultImage from "./DefaultImage";
import CartButton from "./CartButton";

const defaultStyle = StyleSheet.create({
      container: {
            flex: 1.0,
      },
      parent: {
            flex: 1,
            gap: 1,
            flexDirection: "row",
            flexWrap: "wrap",
      },

      imageContainer: {
            backgroundColor: COLORS. secondaryWhite,
            height: screenRatio * 40,
            width: screenRatio * 40,
            justifyContent: "center",
            borderWidth: 2,
            padding:screenRatio * 3,
            borderColor: COLORS.primaryGray,
            borderRadius: 10
      },

      imageFlexContainer: {
            flex: 1,
            height:"auto",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"

      },
      textFlexContainer: {
            flex: 5,
            justifyContent: "space-around",
            alignItems: "flex-start"
      },
      titleContainer: {
            flex: 1,
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 10,
            alignContent: "flex-start",
            alignItems: "flex-start",

      },
      titleDetails: {
            flex: 1,
            alignItems: "flex-start",
            alignContent: "space-around",
            justifyContent: "flex-start"
      },
      titleExtraDetails: {
            flex: 1,
            alignItems: "flex-start",
            alignContent: "space-around",
            justifyContent: "flex-start",
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
interface IStockOut {
      data?:any
}
const StockOutProductList = (props:IStockOut): JSX.Element =>
{
      const {data} = props;
      return(<View style={defaultStyle.container}>
            <View style={defaultStyle.parent}>
                  <View style={defaultStyle.imageFlexContainer}>
                        <DefaultImage styles={defaultStyle.imageContainer} imageUri={data?.image} />

                  </View>
                  <View style={defaultStyle.textFlexContainer}>
                        <View style={defaultStyle.titleContainer}>
                              <View style={defaultStyle.titleDetails}>
                                    <Label size={FONT_SIZE.regular} weight={FONT_WEIGHT.medium} title={data?.name} />
                              </View>
                              <View style={defaultStyle.titleExtraDetails}>
                                    <View style={{ flex: 1 }}>
                                          <Label weight={FONT_WEIGHT.roman} title={"500 ml"} />
                                    </View>
                              </View>
                        </View>
                  </View>
            </View>
      </View>)
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


export default StockOutProductList;

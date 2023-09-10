
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Text from "./Text";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import DefaultImage from "src/components/DefaultImage";
import CartButton from "src/components/CartButton";
import DefaultLabel from "src/components/DefaultLabel";

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1.0,
  },
  parent: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imageContainer: {
    backgroundColor: COLORS.secondaryWhite,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderWidth: 2,
    padding:screenRatio *2,
    borderColor: COLORS.primaryGray,
    borderRadius: 10
  },

  imageFlexContainer: {
    flex: 1.8,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"

  },
  textFlexContainer: {
    flex: 7.2,
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
interface IProductList {
  data?:any
}

const ProductListItem = (props:IProductList): JSX.Element =>{
  const {data} = props;
  return (<View style={defaultStyle.container}>
    <View style={defaultStyle.parent}>
      <View style={defaultStyle.imageFlexContainer}>
        <DefaultImage styles={defaultStyle.imageContainer} imageUri={data?.image} />

      </View>
      <View style={defaultStyle.textFlexContainer}>
        <View style={defaultStyle.titleContainer}>
          <View style={defaultStyle.titleDetails}>
            <DefaultLabel  size={FONT_SIZE.medium} weight={FONT_WEIGHT.heavy} title={data?.name} />
          </View>
          <View style={defaultStyle.titleExtraDetails}>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start", justifyContent: "center" }}>
              <View style={{
                flex: 4,
                alignItems: "flex-start",
                alignContent: "space-between",
                justifyContent: "space-between"
              }}>
                <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
                  <View style={{ flex: 1 }}>
                    <DefaultLabel weight={FONT_WEIGHT.roman} title={`${data?.weight} ${data?.unit}`} />
                  </View>
                  <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start", gap:0 }}>
                    <View style={{ flex: 3, flexWrap: "wrap", alignItems: "flex-start" }}>
                      <DefaultLabel size={FONT_SIZE.regular} weight={FONT_WEIGHT.heavy} title={`₹${(100-data?.product_offer?.discount)/100 * data?.price[0]?.price}`} />
                    </View>
                    <View style={{ flex: 1, flexWrap: "wrap", alignItems: "stretch" }}>
                      <DefaultLabel styles={{
                        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                      }} size={FONT_SIZE.regular} weight={FONT_WEIGHT.roman} title={`₹${data?.price[0]?.price}`} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{
                flex: 2, flexWrap: "wrap",
                alignItems: "flex-end",
                alignContent: "center",
                justifyContent: "flex-end"
              }}>
                <CartButton data={data} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>)
}



export default ProductListItem;

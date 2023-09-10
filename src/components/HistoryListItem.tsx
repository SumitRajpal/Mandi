
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
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
    gap: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imageContainer: {
    backgroundColor: COLORS.secondaryWhite,
    height: screenRatio * 40,
    width: screenRatio * 40,
    justifyContent: "center",
    borderWidth: 2,
    padding:screenRatio *3,
    borderColor: COLORS.primaryGray,
    borderRadius: 10
  },

  imageFlexContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"

  },
  textFlexContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  titleContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 5,
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
  }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IProductList {
  data?:any
}

const HistoryListItem = (props:IProductList): JSX.Element =>{
  const {data} = props;
  return (<View style={defaultStyle.container}>
    <View style={defaultStyle.parent}>
      <View style={defaultStyle.imageFlexContainer}>
        <DefaultImage styles={defaultStyle.imageContainer} imageUri={data?.cart_details_product?.image} />

      </View>
      <View style={defaultStyle.textFlexContainer}>
        <View style={defaultStyle.titleContainer}>
          <View style={defaultStyle.titleDetails}>
            <DefaultLabel  size={FONT_SIZE.medium} weight={FONT_WEIGHT.heavy} title={data?.cart_details_product?.name} />
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
                    <DefaultLabel weight={FONT_WEIGHT.roman} title={`${data?.cart_details_product?.weight} ${data?.cart_details_product?.unit} x ${data?.quantity}`} />
                  </View>
                  
                </View>
              </View>
              <View style={{
                flex: 2, flexWrap: "wrap",
                alignItems: "flex-end",
                alignContent: "center",
                justifyContent: "flex-end"
              }}>
                <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start", gap: 0 }}>
                    <View style={{ flex: 1, flexWrap: "wrap", alignItems: "flex-start" }}>
                      <DefaultLabel size={FONT_SIZE.regular} weight={FONT_WEIGHT.heavy} title={`₹${ ((100 - data?.offer?.discount) /100 *data?.price?.price) * data?.quantity}`} />
                    </View>
                    <View style={{ flex: 1, flexWrap: "wrap", alignItems: "stretch" }}>
                      <DefaultLabel styles={{
                        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                      }} size={FONT_SIZE.regular} weight={FONT_WEIGHT.roman} title={`₹${data?.quantity * data?.price?.price}`} />
                    </View>
                  </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>)
}



export default HistoryListItem;

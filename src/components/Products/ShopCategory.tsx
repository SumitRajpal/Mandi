
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS } from "src/constants/font";
import DefaultCategory from "../DefaultCategory";

const styles = StyleSheet.create({
      container: {
            flex: 1.0,
            justifyContent: "center"
      },
      indicatorView: {
            backgroundColor: COLORS.primaryWhite,
            alignSelf: "center",
            padding: 30,
            borderRadius: 50
      }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const ShopCategory = (): JSX.Element =>

      <View>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginHorizontal: 5 }}>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginHorizontal: 5 }}>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Munchies" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
                  <View style={{ flexBasis: "25%", alignItems: "center" }}>
                        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
                  </View>
            </View>
      </View>

export default ShopCategory;

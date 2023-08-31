
import React from "react";
import { ActivityIndicator, FlatList, Image, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { DefaultLabel, Text } from "src/components";
import { SCREEN_IDENTIFIER, screenHeight, screenRatio, screenWidth } from "src/constants";
import { useNavigation } from "@react-navigation/native";
import CartProduct from "../CartProduct";

const defaultStyles = StyleSheet.create({
      shopcontainer: {
            flex: 1.0,
            justifyContent: "flex-start"
      },
      container: {
            flex: 6,
            padding: 0,
            backgroundColor: COLORS.secondaryBlue,
            alignContent: "flex-start",
            borderRadius: 15,
            
      },
      parentContainer: {
            flex: 1,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
      },
      imageFeatures: {
            flex: 1,
            padding: 10,
            shadow: {
                  ...Platform.select({
                        android: {
                              elevation: 2,
                              shadowColor: COLORS.primaryBlue
                        },
                        ios: {
                              shadowColor: COLORS.sky,
                              shadowOpacity: 0.3,
                              shadowRadius: 1,
                              shadowOffset: { width: 0, height: 1 }
                        }
                  }),
                  backgroundColor: COLORS.sky,
                  borderRadius: 4
            }
      },
      image: {
            flex: 1
      },
      text: {
            alignSelf: "center",
            overflow: "visible",
            lineHeight: 16
      },
      title: {
            padding: 0,
            flex:4
      }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IProductHorizontal {
      horizontalTitle: string
}
const ProductHorizontal = (props: IProductHorizontal): JSX.Element => {
      const { horizontalTitle } = props;
      const navigation = useNavigation();
      const ordersList = [{ id: 1, name: "fwfwf" }, { id: 2, name: "fwfwf" }, { id: 3, name: "fwfwf" }, { id: 42, name: "fwfwf" }, { id: 50, name: "fwfwf" }, { id: 6, name: "fwfwf" },
      { id: 15, name: "fwfwf" }, { id: 26, name: "fwfwf" }, { id: 34, name: "fwfwf" }, { id: 45, name: "fwfwf" }, { id: 58, name: "fwfwf" }, { id: 67, name: "fwfwf" },
      { id: 15, name: "fwfwf" }, { id: 27, name: "fwfwf" }, { id: 36, name: "fwfwf" }, { id: 49, name: "fwfwf" }, { id: 55, name: "fwfwf" }, { id: 63, name: "fwfwf" },
      { id: 19, name: "fwfwf" }, { id: 20, name: "fwfwf" }, { id: 38, name: "fwfwf" }, { id: 41, name: "fwfwf" }, { id: 53, name: "fwfwf" }, { id: 62, name: "fwfwf" }]


      return (

            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "column" }}>
                  <View style={{ flex: 1 }} >
                        <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                              <View style={{ flex: 1, alignContent: "center", alignItems: "flex-start", padding: 10 }}>
                                    <DefaultLabel size={FONT_SIZE.large} title={horizontalTitle} />
                              </View>
                              <View style={{ flex: 1, alignContent: "center", alignItems: "flex-end", padding: 10 }}>
                                    <DefaultLabel styles={{ color: COLORS.primaryGreen }} size={FONT_SIZE.medium} title={"see all"} />
                              </View>
                        </View>
                  </View>
                  <View style={{ flex: 1 }}>
                        <FlatList
                              data={ordersList}
                              horizontal
                              nestedScrollEnabled
                              contentContainerStyle={{}}
                              showsVerticalScrollIndicator={false}
                              keyExtractor={(item, index) => item?.id + index.toString()}
                              onEndReachedThreshold={0.5}
                              renderItem={({ item }) => item && <CartProduct styles={{ width: screenWidth / 2.5 }} imageStyles={{ padding: screenHeight / 16 }} title="Green Chilly - 100gm - (Hari mirch)" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              }
                        />
                  </View>
            </View>
      )
}

export default ProductHorizontal;

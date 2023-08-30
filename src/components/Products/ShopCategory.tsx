
import React from "react";
import { ActivityIndicator, Image, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { DefaultLabel, Text } from "src/components";
import { SCREEN_IDENTIFIER, screenHeight, screenWidth } from "src/constants";
import { useNavigation } from "@react-navigation/native";

const defaultStyles = StyleSheet.create({
      shopcontainer: {
            flex: 1.0,
            justifyContent: "flex-start"
      },
      container: {
            flex: 6,
            padding: 0,
            backgroundColor: COLORS.secondaryBlue,
            height: "100%",
            width: "100%",
            alignContent: "flex-start",
            borderRadius: 15,
      },
      parentContainer: {
            flex: 1,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
            height: screenHeight / 5.5,
            width: screenWidth / 4.6,
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

const ShopCategory = (): JSX.Element => {
      const navigation = useNavigation();
      return (
            <Pressable onPress={() =>  navigation.navigate(SCREEN_IDENTIFIER.ProductList.identifier as never)
            }>
                  <View style={defaultStyles.shopcontainer}>
                        <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", justifyContent: "flex-start" }}>
                              <View style={{ flex: 1, alignItems: "flex-start", alignContent: "flex-start", padding: 10 }}>
                                    <Label size={FONT_SIZE.large} weight={FONT_WEIGHT.black} title="Category" />
                              </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginHorizontal: 5 }}>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginHorizontal: 5 }}>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Munchies" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                              <View style={{ flex: 1, alignItems: "center" }}>
                                    <DefaultCategory title="Dairy & Breakfast" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                              </View>
                        </View>
                  </View>
            </Pressable>)
}
interface IDefaultImage {
      imageStyles?: any,
      styles?: any,
      imageUri: any,
      title: string
}
const DefaultCategory = (props: IDefaultImage): JSX.Element => {
      const { styles, imageStyles, imageUri, title } = props
      return (
            <View style={[defaultStyles.parentContainer, styles]}>
                  <View style={[defaultStyles.container, styles]}>
                        <View style={defaultStyles.imageFeatures}>
                              <Image
                                    style={[defaultStyles.image, imageStyles]}
                                    source={{ uri: imageUri }}
                              />
                        </View>

                  </View>
                  <View style={defaultStyles.title}>
                        <Label title={title} />
                  </View>
            </View>);
}
interface ILABEL {
      title: string
      size?: number
      weight?: number
}
const Label = (props: ILABEL) => {
      const { title, size = FONT_SIZE.small, weight = FONT_WEIGHT.heavy } = props;
      return (
            <Text
                  style={[defaultStyles.text]}
                  size={size}
                  isPoppins={true}
                  weight={weight}
                  color={COLORS.text_black}
            >
                  {title}
            </Text>
      );
};
export default ShopCategory;

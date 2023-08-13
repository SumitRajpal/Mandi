
import React from "react";
import { Image, Modal, Platform, StyleSheet, View } from "react-native";
import { screenHeight, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Text from "./Text";

const defaultStyles = StyleSheet.create({
      container: {
            flex: 1.0,
            padding: 0,
            backgroundColor: COLORS.secondaryBlue,
            height: "100%",
            width: "100%",
            alignContent:"center",
            borderRadius: 15,
      },
      parentContainer: {
            flex: 1,
            alignSelf: "center",
            alignItems:"center",
            flexDirection: "column",
            gap: 1,
            height: screenHeight,
            width: screenWidth ,
      },
      imageFeatures: {
            flex: 1,
            padding:10,
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
      }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IDefaultImage {
      imageStyles?: any,
      styles?: any,
      imageUri: any,
      title?: string
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
                  {title && <Label title={title} />}
                  </View>
            </View>);
}

interface ILABEL {
      title: string
}
const Label = (props: ILABEL) => {
      const { title } = props;
      return (
            <Text
                  style={[defaultStyles.text]}
                  size={FONT_SIZE.small}
                  isPoppins={true}
                  weight={FONT_WEIGHT.heavy}
                  color={COLORS.text_black}
            >
                  {title}
            </Text>
      );
};
export default DefaultCategory;

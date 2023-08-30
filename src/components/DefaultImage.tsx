
import React from "react";
import { Image, Modal, Platform, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { AnimatedImage } from "react-native-reanimated/lib/typescript/reanimated2/component/Image";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS } from "src/constants/font";

const defaultStyles = StyleSheet.create({
      container: {
            flex: 1.0,
            padding:10,
            backgroundColor: COLORS.secondaryBlue,
            height: screenRatio*(screenHeight / 8),
            width: screenRatio* (screenWidth / 4),
            justifyContent: "center",
            borderRadius:screenRatio* 30
      },
      imageFeatures: {
            flex: 1,
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
            flex: 1,
            
      }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IDefaultImage {
      imageStyles?: any,
      styles?: any,
      imageUri:any
}
const DefaultImage = (props: IDefaultImage): JSX.Element => {
      const { styles,imageStyles,imageUri} = props
      return (<View style={[defaultStyles.container, styles]}>
            <View style={defaultStyles.imageFeatures}>
                  <Image
                        style={[defaultStyles.image,imageStyles]}
                        source={{uri:imageUri} }
                  />
            </View>
      </View>);
}
export default DefaultImage;

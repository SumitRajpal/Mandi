
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS } from "src/constants/font";
import { Button } from "src/components";
import { screenHeight, screenRatio, screenWidth } from "src/constants";

const styles = StyleSheet.create({
      footerContainer: {
            position: "absolute",
            bottom: 0,
            shadowColor: COLORS.primaryRed,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 2,
            shadowOpacity: 0.9,
            elevation: 10,
            backgroundColor: COLORS.secondaryWhite,
            padding: 0,
            borderRadius: 15,
            width: screenWidth,
            height: screenHeight / 12,
      
          },
          footerBasis: {
            flexBasis: "50%",
            gap: screenRatio * 10,
            alignSelf: "center"
          },
          footerFlex: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: screenRatio * 5,
            width: screenWidth,
            height: screenHeight / 11
          },
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const Footer = (): JSX.Element => 

<View style={styles.footerContainer}>
          <View style={styles.footerFlex}>
            <View style={styles.footerBasis}>
              <Button style={{}}
                title="Next" onPress={() => console.log("fef")} />

            </View>

            <View style={styles.footerBasis}>
            <Button style={{}}
                title="Next" onPress={() => console.log("fef")} />

            </View>
          </View>
        </View>

export default Footer;

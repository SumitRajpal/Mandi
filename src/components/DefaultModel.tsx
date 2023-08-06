
import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS } from "src/constants/font";
import { Button } from ".";

const defaultStyles = StyleSheet.create(
      {
            modalChild: {
                  height: "auto",
                  position: "absolute",
                  bottom: 0,
                  width: screenWidth,
                  backgroundColor: COLORS.primaryWhite,
                  borderRadius: screenRatio * 20,
                  shadow: {
                        shadowRadius: 10,
                        shadowOffset: {
                              width: 0,
                              height: -3,
                        },
                        shadowColor: COLORS.black,
                        elevation: 4,
                  },
            },
            modelParent: {
                  height: screenHeight,
                  bottom: 0
            },
            loginText: {
                  alignItems: "center",
                  marginVertical: screenRatio * 20
            },
            close: {
                  alignContent: "center",
                  alignSelf: "center",
                  position: "absolute",
                  bottom: screenHeight / 3
            },
            inputView: {
                  marginHorizontal: screenRatio * 20
                },
                margin: {
                  marginTop: screenRatio * 20
                },
      }
);

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IDefaultModel {
      children: ReactNode
      styles?: any,
      visible: boolean
}
const DefaultModel = (props: IDefaultModel): JSX.Element => {
      const { styles, visible, children } = props
      const [isModel, setModel] = useState(false);

      useEffect(() => {
            setModel(visible)
      }, [visible]);

      return (
            
            <Modal
                  animationType="slide"
                  visible={isModel}
                  transparent
                  onRequestClose={() => {

                  }}>

                  <View style={defaultStyles.modelParent}>
                        <View style={defaultStyles.modalChild}>
                              <View style={defaultStyles.close}>
            
                              </View>
                              {children}
                        </View>
                  </View>
            </Modal>);
}
export default DefaultModel;


import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS } from "src/constants/font";
import { Button } from ".";
import Icon from 'react-native-vector-icons/AntDesign';


/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IDefaultModel {
      children?: ReactNode
      styles?: any,
      visible: boolean,
      height: any
}
const DefaultModel = (props: IDefaultModel): JSX.Element => {
      const { styles, visible, children, height } = props
      const [isModel, setModel] = useState(false);

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
                                    height: 2,
                              },
                              shadowColor: COLORS.black,
                              elevation: 4,
                        },
                  },
                  modelParent: {
                        height: screenHeight,
                        bottom: 0,
                        marginBottom: 20
                  },
                  close: {
                        alignContent: "center",
                        alignSelf: "center",
                        position: "absolute",
                        bottom: height
                  },
                  margin: {
                        marginTop: screenRatio * 20
                  },
            }
      );
      useEffect(() => {
            setModel(visible)
      }, [visible]);

      return (
            <SafeAreaView style={{ marginHorizontal: 100 }}>
                  <Modal
                        animationType="slide"
                        visible={isModel}
                        transparent
                        onRequestClose={() => {
                              setModel(false);
                        }}>

                        <View style={defaultStyles.modelParent}>
                              <View style={defaultStyles.modalChild}>
                                    <View style={defaultStyles.close}>
                                          <Icon name="closecircle" size={screenRatio * 30} color={COLORS.text_black} onPress={() => setModel(false)} />
                                    </View>
                                    {children}
                              </View>
                        </View>
                  </Modal>
            </SafeAreaView>);
}
export default DefaultModel;

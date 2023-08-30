
import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS } from "src/constants/font";
import { Button } from ".";
import Icon from 'react-native-vector-icons/AntDesign';
import CartList from "./Products/CartList";
import Footer from "./footer";
import GestureRecognizer from "react-native-swipe-gestures";


/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */
interface IDefaultModel {
      styles?: any,
      visible: boolean,
      height: any,
      onModelClose(value: boolean): any;
}
const CartListModel = (props: IDefaultModel): JSX.Element => {
      const { styles, visible, height, onModelClose } = props
      const [isModel, setModel] = useState(false);

      const defaultStyles = StyleSheet.create(
            {
                  container: { flex: 1 },
                  modalChild: {
                        height: "auto",
                        position: "absolute",
                        bottom: 0,
                        maxHeight: screenRatio * (screenHeight/4),
                        minHeight: screenRatio * (screenHeight/2),
                        paddingHorizontal: screenRatio * 8,
                        width: screenWidth,
                        backgroundColor: COLORS.primaryWhite,
                        borderRadius: screenRatio * 14,
                        shadow: {
                              shadowRadius: 10,
                              shadowOffset: {
                                    width: 0,
                                    height: 2,
                              },
                              shadowColor: COLORS.black,
                              elevation: 4,
                        },

                        paddingBottom: screenRatio * (screenHeight/14)
                  },
                  modelParent: {
                        height: screenHeight,
                        bottom: 0,
                        marginBottom:0 ,

                        backgroundColor:COLORS.transparent
                  },
                  close: {
                        alignContent: "center",
                        alignSelf: "center",
                        position: "absolute",
                        top: -(screenRatio*(screenHeight / 16))
                  }
            }
      );
      useEffect(() => {
            setModel(visible)
      }, [visible]);

      return (
            <GestureRecognizer config={{
                  velocityThreshold: 0.5,
                  directionalOffsetThreshold: 80
            }} onSwipeDown={() => { setModel(false) }}>
                  <SafeAreaView style={{ flex: 1 }}>
                        <Modal
                              hardwareAccelerated
                              animationType="slide"
                              visible={isModel}
                              transparent
                              onRequestClose={() => {
                                    console.log(isModel)
                                    setModel(!isModel);
                                    onModelClose(!isModel)
                              }}>

                              <View style={defaultStyles.modelParent}>
                                    <View style={defaultStyles.modalChild}>
                                          <View style={defaultStyles.close}>
                                                <Icon name="closecircle" size={screenRatio * 30} color={COLORS.text_black} onPress={() => {
                                                      setModel(!isModel);

                                                      onModelClose(!isModel)
                                                }} />
                                          </View>
                                          <ScrollView style={defaultStyles.container}>
                                                <CartList />
                                          </ScrollView>
                                          <Footer />
                                    </View>
                              </View>
                        </Modal>
                  </SafeAreaView>
            </GestureRecognizer>
      );
}
export default CartListModel;

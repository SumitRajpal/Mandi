
import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS } from "src/constants/font";
import Icon from 'react-native-vector-icons/AntDesign';
import GestureRecognizer from "react-native-swipe-gestures";
import PaymentOption from "src/screens/Payment/PaymentOption";
import AddressList from "./AddressList";


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
const AddressModel = (props: IDefaultModel): JSX.Element => {
      const { styles, visible, onModelClose } = props
      const [isModel, setModel] = useState(false);

      const defaultStyles = StyleSheet.create(
            {
                  container: { flex: 1 },
                  modalChild: {
                        height: "auto",
                        position: "absolute",
                        bottom: 0,
                        maxHeight: screenRatio * (screenHeight / 2),
                        minHeight: screenRatio * (screenHeight / 2),
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
                  },
                  modelParent: {
                        height: screenHeight,
                        bottom: 0,
                        marginBottom: 0,
                        backgroundColor: COLORS.transparent
                  },
                  close: {
                        alignContent: "center",
                        alignSelf: "center",
                        position: "absolute",
                        top: - screenRatio * (screenHeight / 10)
                  }
            }
      );
      useEffect(() => {
            setModel(visible)
      }, [visible]);

      return (
            <GestureRecognizer config={{
                  velocityThreshold: 0.1,
                  directionalOffsetThreshold: 80
            }} onSwipeDown={() => { setModel(false) }}>
                  <SafeAreaView style={{ flex: 1 }}>
                        <Modal
                              hardwareAccelerated
                              animationType="slide"
                              visible={isModel}
                              transparent
                              onRequestClose={() => {
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
                                                <AddressList isAddress={true} onAddressClose={(value)=> {setModel(false);onModelClose(false)}}/>
                                          </ScrollView>
                                    </View>
                              </View>
                        </Modal>
                  </SafeAreaView>
            </GestureRecognizer>
      );
}
export default AddressModel;

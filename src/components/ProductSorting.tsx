
import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Text } from "src/components";
import Icon from 'react-native-vector-icons/AntDesign';
import { RadioButtons } from "src/components";
import DefaultLabel from "./DefaultLabel";


const defaultStyles = StyleSheet.create(
      {
            modalChild: {
                  position: "absolute",
                  bottom: 0,
                  flex: 1,
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
                  flex: 1,
                  marginBottom: 5,

            },
            close: {
                  alignContent: "center",
                  alignSelf: "center",
                  position: "absolute",
                  bottom: screenHeight / 2.6
            },
            margin: {
                  marginTop: screenRatio * 20
            },
            text: {
                  flex: 1,
                  letterSpacing:1
            }
      }
);
interface IDefaultModel {
      children?: ReactNode
      styles?: any,
      visible: boolean,
      height: any
}
const ProductSorting = (props: IDefaultModel): JSX.Element => {
      const { styles, visible, children, height } = props
      const [isModel, setModel] = useState(false);
      const [sorting, setSorting] = useState("default");


      useEffect(() => {
            setModel(visible)
      }, [visible]);

      return (
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
                              <View style={{ flex: 1, flexDirection: "column",marginHorizontal:15,gap:5,justifyContent:"center",alignItems:"flex-start" }}>
                                    <View style={{ flex: 1, justifyContent:"center",alignContent:"center",marginVertical:20 }}>
                                          <Text
                                                style={[defaultStyles.text, styles]}
                                                size={FONT_SIZE.large}
                                                isPoppins={true}
                                                numberOfLines={1}
                                                weight={FONT_WEIGHT.black2}
                                                color={COLORS.text_black}
                                          >
                                                {"Sort by"}
                                          </Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent:"center",alignContent:"center",marginVertical:20}}>
                                          {
                                                <RadioButtons
                                                      selectedOption={{ key: sorting }}
                                                      options={[
                                                      { text: 'Relevance (default)', key: 'default' },
                                                      { text: 'Price (low to high)', key: 'default2' },
                                                      { text: 'Price (high to low)', key: 'default3' },
                                                      { text: 'Price (low to high)', key: 'default4' },
                                                      { text: 'Discount (high to low)', key: 'default5' }]}
                                                      onSelect={(response) => {

                                                            setSorting(response?.key)
                                                            setModel(false)
                                                      }}
                                                />}
                                    </View>
                              </View>


                        </View>
                  </View>
            </Modal>);
}



export default ProductSorting;

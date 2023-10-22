
import React, { useEffect, useMemo, useState } from "react";
import { Modal, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Icon from 'react-native-vector-icons/AntDesign';
import { Button, DefaultLabel } from "src/components";
import DefaultImage from "src/components/DefaultImage";
import CartList from "src/components/Products/CartList";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { CartStore } from "src/context/AuthProvider";

const defaultStyles = StyleSheet.create(
      {
            footerContainer: {
                  flex: 1,
                  position: "absolute",
                  bottom: 0,
                  shadowColor: COLORS.black,
                  shadowOffset: { width: 0, height: 10 },
                  shadowRadius: 8,
                  shadowOpacity: 0.5,
                  elevation: 10,
                  backgroundColor: COLORS.secondaryWhite,
                  padding: 0,
                  borderRadius: 15,
                  width: screenWidth,
                  height: screenRatio * (screenHeight / 16),

            },
            footerBasis: {
                  flex: 1,
                  gap: screenRatio * 10,
            },
            footerFlex: {
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  padding: screenRatio * 5,
                  width: screenWidth,
                  height: screenRatio * (screenHeight / 11),

            },
            text: {
                  flex: 1,
                  letterSpacing: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  textAlignVertical: "center"
            },
            image: {
                  borderRadius: 10,
                  width: screenRatio * 36,
                  height: screenRatio * 36,
                  padding: screenRatio * 5,
                  backgroundColor: COLORS.white,
                  borderWidth: screenRatio * 0.4,
                  borderColor: COLORS.secondaryGray
            },
            container: { flex: 1 },
            modalChild: {
                  height: "auto",
                  position: "absolute",
                  bottom: 0,
                  maxHeight: screenRatio * (screenHeight / 1),
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

                  paddingBottom: screenRatio * (screenHeight / 14)
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
                  top: -(screenRatio * (screenHeight / 16))
            }
      }
);
interface IDefaultModel {
      styles?: any,
      visible: boolean,
      height: any,
      onModelClose(value: boolean): any;
}
const CartListModel = (props: IDefaultModel): JSX.Element => {
     
  const {getCartStore,totalCartItem} = CartStore((state:any) => state)
      const { styles, visible, height, onModelClose } = props
      const [isModel, setModel] = useState(false);

     
  const {cartObject} = CartStore((state) => {
      return {cartObject: state.cart}
    })
      const cartMemo = useMemo(() => getCartStore(), [getCartStore()]);
      
      useEffect( () => {
            setModel(visible)

      }, [visible]);
    
          console.log(cartMemo,"memo list model")
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
                                                {!!Object.keys(cartMemo)?.length && <CartList onResponse={(res) => { }} localCart={cartMemo} product_ids={Object.keys(cartMemo) || []} />}
                                          </ScrollView>

                                    </View>
                              </View>
                              <View style={defaultStyles.footerContainer}>
                                    <View style={defaultStyles.footerFlex}>
                                          <View style={defaultStyles.footerBasis}>
                                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { setModel(!isModel); onModelClose(!isModel) }}>
                                                      <View style={{ flex: 1, flexDirection: "row" }}>
                                                            <View style={{ flex: 1, flexShrink: 1, padding: 0 }}>
                                                                  <View style={{ flex: 1, gap: - (screenRatio * 10), padding: 5, flexDirection: "row", flexShrink: 1, paddingHorizontal: 20 }}>
                                                                        {Object.keys(cartMemo)?.map((data) => <View key={data}  style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                                                              <DefaultImage key={String(data)} styles={defaultStyles.image} imageUri={cartMemo[data]?.image} />
                                                                        </View>)
                                                                        }
                                                                  </View>
                                                            </View>
                                                            <View style={{ flex: 1, alignSelf: "center", alignItems: "center", alignContent: "center" }}>
                                                                  <DefaultLabel
                                                                        title={`${totalCartItem()} Items`}
                                                                        size={FONT_SIZE.medium}
                                                                        weight={FONT_WEIGHT.medium}
                                                                  />

                                                            </View>
                                                      </View>
                                                </TouchableOpacity>
                                          </View>

                                          <View style={defaultStyles.footerBasis}>
                                                <Button style={{}}
                                                      title="Next" onPress={() => { }} />
                                          </View>
                                    </View>

                              </View>
                        </Modal>
                  </SafeAreaView>
            </GestureRecognizer>
      );
}
export default CartListModel;


import React, { ReactNode, useEffect, useState } from "react";
import { Image, Modal, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { screenHeight, screenRatio, screenWidth } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, DefaultLabel, Text } from "src/components";
import Icon from 'react-native-vector-icons/FontAwesome6';
import DefaultImage from "src/components/DefaultImage";

const OrderHistoryItems = (): JSX.Element => {
    console.log(screenRatio)
      const defaultStyles = StyleSheet.create(
            {
                  image: {
                        maxWidth:screenRatio*50,
                        height:screenRatio*50,
                        borderRadius: 10,
                        backgroundColor: COLORS.white,
                        borderWidth: 0.4,
                        borderColor: COLORS.secondaryGray
                  },
                  parent: {
                        flex: 1,
                        shadowColor: COLORS.secondaryGray,
                        borderRadius: 10,
                        marginVertical: 5,
                        borderWidth: 1,
                        borderColor: COLORS.primaryGray,
                        shadow: {
                              ...Platform.select({
                                    android: {
                                          elevation: 5 ,
                                          shadowColor: COLORS.secondaryGray,
                                    },
                                    ios: {
                                          shadowColor: COLORS.secondaryGray,
                                          shadowOpacity: 5,
                                          shadowRadius: 5,
                                          shadowOffset: { width: 4, height: 4 }
                                    }
                              }),
                              backgroundColor: COLORS.secondaryGray,
                              borderRadius: 4
                        }
            
                  },
            }
      );

      return (<View style={defaultStyles.parent}>
            <View style={{ flex: 1, flexDirection: "column", gap: 20 ,backgroundColor:COLORS.white}}>
                  <View style={{ flex: 4,paddingTop:20 }}>
                        <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                                    <View style={{ flex: 1, borderRadius: 15, padding: 15, backgroundColor: COLORS.tertiaryGreen }}>
                                          <Icon name="check" size={screenRatio * 15} color={COLORS.primaryGreen} />
                                    </View>
                              </View>
                              <View style={{ flex: 7, alignItems: "flex-start", justifyContent: "center",alignContent:"center" }}>
                                    <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", padding:5, alignContent: "flex-start" }}>
                                          <View style={{ flex: 1,alignItems:"center",alignContent:"center" }}>
                                                <DefaultLabel weight={FONT_WEIGHT.black} size={FONT_SIZE.large} title={"Delivered in 14 minutes"} />
                                          </View>
                                          <View style={{ flex: 1 }}>
                                                <DefaultLabel weight={FONT_WEIGHT.medium} size={FONT_SIZE.small} title={"₹512 17 Jul, 4:04 pm"} />
                                          </View>
                                    </View>
                              </View>
                              <View style={{ flex: 1, alignItems: "center", alignContent: "center", alignSelf: "center" }}>
                                    <Icon name="arrow-right" size={20} color={COLORS.text_black} />
                              </View>
                        </View>
                  </View>
                  <View style={{ flex: 6, alignContent: "center", alignItems: "center" }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                              <View style={{ flex: 1, paddingHorizontal: 0 }}>
                                    <View style={{ flex: 1, gap: 10, padding: 0, flexDirection: "row", paddingHorizontal: 20 }}>
                                          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                                <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                                          </View>
                                          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                                <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                                          </View>
                                          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                                <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                                          </View>
                                          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                                <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                                          </View><View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                                <DefaultImage styles={defaultStyles.image} imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />
                                          </View>
                                    </View>
                              </View>

                        </View>
                  </View>
                  <View style={{ flex: 4, padding:10,alignContent: "center", alignItems: "center", borderColor: COLORS.primaryGray, borderTopWidth: 0.2 }}>
                        <View style={{ flex: 1}}>
                              <DefaultLabel styles={{ color: COLORS.primaryGreen }} weight={FONT_WEIGHT.regular3} size={FONT_SIZE.regular} title={"Reorder"} />
                        </View>
                  </View>
            </View>
      </View>);
}
export default OrderHistoryItems;

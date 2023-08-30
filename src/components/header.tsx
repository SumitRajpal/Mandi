
import React, { useState } from "react";
import { ActivityIndicator, Linking, Modal, Pressable, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { Button, DefaultLabel, Text } from "src/components";
import { SCREEN_IDENTIFIER, screenHeight, screenRatio, screenWidth } from "src/constants";

import FMIcon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from "@react-navigation/native";

const defaultStyles = StyleSheet.create({
      footerContainer: {
            position:"relative",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 8,
            shadowOpacity: 0.5,
            elevation: 10,
            backgroundColor: COLORS.secondaryWhite,
            padding: 0,
            width: screenWidth,
            height: screenRatio*(screenHeight / 18),

      },
      footerBasis: {
            flex: 1,
      },
      footerFlex: {
            flex: 1,
            flexGrow: 1,
            alignItems:"center",
            justifyContent:"center",
         
            flexDirection: "row",

      }

});

interface IHEADER { 
      title:string
}
const Header = (props:IHEADER): JSX.Element => {
      const navigation = useNavigation();
      const {title} = props
      return (
            <View style={defaultStyles.footerContainer}>
                  <View style={defaultStyles.footerFlex}>
                        <View style={{ flex:1,alignItems:"center" }}>
                              <FMIcon name="arrow-left" size={screenRatio*16} color={COLORS.tertiaryGray} onPress={() => navigation.goBack()} />

                        </View>
                        <View style={{ flex: 8 ,justifyContent:"center",alignItems:"center"}}>
                              <DefaultLabel size={FONT_SIZE.extra_large} weight={FONT_WEIGHT.medium} title={title} />
                        </View>
                        <View style={{ flex:1,alignItems:"center" }}>
                              
                        </View>
                  </View>
            </View>);
}


export default Header;

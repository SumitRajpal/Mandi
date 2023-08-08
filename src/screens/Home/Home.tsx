import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { api } from "src/api/http";
import { WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
import { useQuery } from "@tanstack/react-query";
import ProgressView from "src/components/ProgressView";
import { Button, Text } from "src/components";
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from "src/components/footer";
import DefaultCategory from "src/components/DefaultCategory";
import DefaultSearchBar from "src/components/DefaultSearchBar";

const Home = (): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flex: 1.0,
      backgroundColor: COLORS.secondaryWhite
    },
    headerFlex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 0,
      width: screenWidth,
      height: screenHeight / 10
    },

    headerDetails: {
      flexBasis: "80%",
      alignItems: "flex-start",
      alignSelf: "center",
      gap: screenRatio
    },

    profileDetails: {
      flexBasis: "20%",
      alignItems: "center",
      alignSelf: "center"
    },
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

    flexContent: {
      flexBasis:"20%",
      alignContent:"center",
      textAlign:"center",
      alignItems: "center",
      alignSelf:"center"
    },
    gridFlex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 0,
      gap:0,
      maxWidth: screenWidth,
  
    },
  });

  return (
    <View style={styles.container} >
      <View style={styles.headerFlex}>
        <View style={styles.headerDetails}>
          <Text color={COLORS.text_black} size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}>Delivering in</Text>
          <Text color={COLORS.text_black} size={FONT_SIZE.xxx_large} isPoppins={true} weight={FONT_WEIGHT.black}>Tomorrow 8am</Text>
          <Text color={COLORS.text_black} size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}>Home - </Text>
        </View>
        <View style={styles.profileDetails}>
          <Icon name="user-circle-o" size={screenRatio * 30} color={COLORS.text_black} />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          
          <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",marginHorizontal:5}}>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        </View>

        <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",marginHorizontal:5}}>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Munchies" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        <View style={{flexBasis:"25%",alignItems:"center"}}>
        <DefaultCategory title="Dairy & Breakfast" imageUri={"https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png"} />
        </View>
        </View>
        </ScrollView>


        <Footer />
      </SafeAreaView>

    </View>
  );
};
export default Home;

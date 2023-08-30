import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
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
import ShopCategory from "src/components/Products/ShopCategory";
import CartProduct from "src/components/CartProduct";
import ProductListItem from "src/components/ProductListItem";
import ProductHorizontal from "src/components/Products/ProductHorizontal";

const Profile = (): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white
    },
    safearea: {
      flex: 1,
      paddingBottom: screenHeight / 12,
      backgroundColor: COLORS.white
    },
    cart: { flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 10 },
    headerFlex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      flex:1
    },

    headerDetails: {
      flex:7,
      alignItems: "flex-start",
      alignSelf: "center",
      gap: 5
    },

    profileDetails: {
      flex:3,
      alignItems: "flex-end",
      alignSelf: "center"
    },




  });


  return (
    <View style={styles.container} >
      
      <SafeAreaView style={styles.safearea}>
      
        <ScrollView
          showsVerticalScrollIndicator={false} >
           
         </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Profile;

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

const Home = (): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white
    },
    cart: { flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 10 },
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




  });


  return (
    <View style={styles.container} >
      {/* {<View style={styles.headerFlex}>
        <View style={styles.headerDetails}>
          <Text color={COLORS.text_black} size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}>Delivering in</Text>
          <Text color={COLORS.text_black} size={FONT_SIZE.xxx_large} isPoppins={true} weight={FONT_WEIGHT.black}>Tomorrow 8am</Text>
          <Text color={COLORS.text_black} size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}>Home - </Text>
        </View>
        <View style={styles.profileDetails}>
          <Icon name="user-circle-o" size={screenRatio * 30} color={COLORS.text_black} />
        </View>
      </View>} */}
      <SafeAreaView style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false} >
        
          <ShopCategory />

          <ProductHorizontal/>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    </View>
  );
};
export default Home;

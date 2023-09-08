import { FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { api } from "src/api/http";
import { SCREEN_IDENTIFIER, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";
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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "..";
import { AuthContext } from "src/context/AuthProvider";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Home = (): JSX.Element => {
  type StackNavigation = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackNavigation>();
  const { getCart } = useContext(AuthContext);
  const [getCartData, setCartData] = useState({});

  useEffect(() => {
    async function getData() {
      const result = await getCart();
      setCartData(result)
    }
    getData();
  }, [getCartData])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white
    },
    safearea: {
      flex: 1,
      paddingBottom: !!Object.keys(getCartData)?.length ? screenRatio * (screenHeight / 16) : 0,
      backgroundColor: COLORS.white
    },
    cart: { flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 10 },
    headerFlex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      flex: 1
    },

    headerDetails: {
      flex: 8,
      alignItems: "flex-start",
      alignSelf: "center",
      gap: 5
    },

    profileDetails: {
      flex: 2,
      alignItems: "flex-end",
      alignSelf: "center"
    },

  });

  return (
    <View style={styles.container} >

      <SafeAreaView style={styles.safearea}>
      
      
        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false} >
          <View style={styles.headerFlex}>
            <View style={styles.headerDetails}>
              <Text color={COLORS.text_black} size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}>Delivering in 19 min</Text>
              <Text color={COLORS.text_black} size={FONT_SIZE.large} isPoppins={true} weight={FONT_WEIGHT.regular3}>Home - 7/50 9 Tilak nagar KFC  </Text>
            </View>
            <View style={styles.profileDetails}>
              <TouchableOpacity onPress={() => navigation.navigate(SCREEN_IDENTIFIER.Profile.identifier as never)}
              >
                <Icon name="user-circle-o" size={screenRatio * 30} color={COLORS.text_black} />
              </TouchableOpacity>

            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: COLORS.white, paddingVertical: 10 }}><DefaultSearchBar searchValue="" onChangeText={() => { }} /></View>
          <ProductHorizontal horizontalTitle="Order Again" />
          <ShopCategory />
          <ProductHorizontal horizontalTitle="Best Seller" />
        </ScrollView>
        {!!Object.keys(getCartData)?.length && <Footer />}
      </SafeAreaView>
    </View>
  );
};
export default Home;

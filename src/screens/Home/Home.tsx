import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from "src/components";
import AddressModel from "src/components/AddressModel";
import DefaultSearchBar from "src/components/DefaultSearchBar";
import ProductHorizontal from "src/components/Products/ProductHorizontal";
import ShopCategory from "src/components/Products/ShopCategory";
import Footer from "src/components/footer";
import { SCREEN_IDENTIFIER, screenHeight, screenRatio } from "src/constants";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { AuthContext } from "src/context/AuthProvider";

import { CartStore } from "src/context/AuthProvider";
import { StackParamList } from "..";

const Home = (): JSX.Element => {
  type StackNavigation = StackNavigationProp<StackParamList>;
  const navigation = useNavigation<StackNavigation>();
  const {getAuthAddress } = useContext(AuthContext);
  const {totalCartItem,getCartStore} = CartStore((state:any) => state)
  const [address, setAddress] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<any>(null);
  const cartMemo = useMemo(() => getCartStore(), [getCartStore(),totalCartItem()]);
  useEffect(() => {
    getCurrentAddress();
  }, [getAuthAddress()])

  const getCurrentAddress  = (async () => {
    const address = await getAuthAddress();
    setCurrentAddress(`${address?.address_1 || ''},${address?.address_2 || ''},${address?.landmark || ''},${address?.pincode || ''}`)
  }) 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white
    },
    safearea: {
      flex: 1,
      paddingBottom: totalCartItem() ? screenRatio * (screenHeight / 16) : 0,
      backgroundColor: COLORS.white
    },
    cart: { flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 10 },
    headerFlex: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      padding: 10,
      flex: 1
    },

    headerDetails: {
      flex: 8,
      alignItems: "flex-start",
      alignSelf: "center"
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
            <TouchableOpacity onPress={() => setAddress(!address)}>
              <View style={styles.headerDetails}>
              <Text numberOfLines={1} color={COLORS.text_black} size={FONT_SIZE.extra_large} isPoppins={true} weight={FONT_WEIGHT.heavy}>Delivering in 19 min</Text>
              <Text style={{ overflow: "hidden"}} numberOfLines={2} color={COLORS.text_black} size={FONT_SIZE.large} isPoppins={true} weight={FONT_WEIGHT.regular3}>{currentAddress}</Text>
            </View>
            </TouchableOpacity>
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
        <AddressModel visible={address} onModelClose={(value) => setAddress(value)} height={100} />
        {!!totalCartItem() && <Footer key={"footer"} />}
      </SafeAreaView>
    </View>
  );
};
export default Home;

import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from "src/components/footer";
import CartProduct from "src/components/CartProduct";
import { screenHeight } from "src/constants";
import { DefaultSearchBar } from "src/components";

const ProductList = (): JSX.Element => {
      const styles = StyleSheet.create({
            container: {
                  flex: 1,
                  backgroundColor: COLORS.white
            }
      });


      return (
            <View style={styles.container} >
                  <SafeAreaView style={styles.container}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                              <View style={{ flex: 1, alignContent: "center", alignItems: "center", alignSelf: "center", margin: 10, marginHorizontal: 50 }}>
                                    <DefaultSearchBar  searchValue="" onChangeText={() => {}}/>
                              </View>
                        </View>


                        <Footer />
                  </SafeAreaView>
            </View>
      );
};
export default ProductList;

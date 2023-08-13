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
      const ordersList = [{ id: 1, name: "fwfwf" }, { id: 2, name: "fwfwf" }, { id: 3, name: "fwfwf" }, { id: 42, name: "fwfwf" }, { id: 50, name: "fwfwf" }, { id: 6, name: "fwfwf" },
      { id: 15, name: "fwfwf" }, { id: 26, name: "fwfwf" }, { id: 34, name: "fwfwf" }, { id: 45, name: "fwfwf" }, { id: 58, name: "fwfwf" }, { id: 67, name: "fwfwf" },
      { id: 15, name: "fwfwf" }, { id: 27, name: "fwfwf" }, { id: 36, name: "fwfwf" }, { id: 49, name: "fwfwf" }, { id: 55, name: "fwfwf" }, { id: 63, name: "fwfwf" },
      { id: 19, name: "fwfwf" }, { id: 20, name: "fwfwf" }, { id: 38, name: "fwfwf" }, { id: 41, name: "fwfwf" }, { id: 53, name: "fwfwf" }, { id: 62, name: "fwfwf" }]


      return (
            <View style={styles.container} >
                  <SafeAreaView style={styles.container}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                              <View style={{ flex: 1, alignContent: "center", alignItems: "center", alignSelf: "center", margin: 10, marginHorizontal: 50 }}>
                                    <DefaultSearchBar />
                              </View>
                              <View style={{ flex: 9.5 }}>
                                    <FlatList
                                          data={ordersList}
                                          numColumns={2}
                                          contentContainerStyle={{ marginHorizontal: 5, paddingBottom: screenHeight / 12 }}
                                          showsVerticalScrollIndicator={true}
                                          keyExtractor={(item, index) => item?.id + index.toString()}
                                          onEndReachedThreshold={0.5}
                                          renderItem={({ item }) => item && <CartProduct title="Green Chilly - 100gm - (Hari mirch)" imageUri={"https://freepngimg.com/thumb/strawberry/58-strawberry-png-images.png"} />}
                                    />
                              </View>
                        </View>


                        <Footer />
                  </SafeAreaView>
            </View>
      );
};
export default ProductList;

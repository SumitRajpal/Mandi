import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { DefaultSearchBar } from "src/components";
import Footer from "src/components/footer";
import { COLORS } from "src/constants/font";

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


                        <Footer key={"footer"}/>
                  </SafeAreaView>
            </View>
      );
};
export default ProductList;

import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";

import OrderHistoryItems from "src/components/OrderHItoryItems";
import Header from "src/components/header";

const OrderHistory = (): JSX.Element => {
      const styles = StyleSheet.create({
            container: {
                  flex: 1,
                  backgroundColor: COLORS.secondaryBlue
            },
            safearea: {
                  flex: 1,
                  backgroundColor: COLORS.secondaryBlue
            },


      });

      const ordersList = [{ id: 1, name: "fwfwf" }, { id: 2, name: "fwfwf" }, { id: 3, name: "fwfwf" }, { id: 42, name: "fwfwf" }, { id: 50, name: "fwfwf" }, { id: 6, name: "fwfwf" },
      { id: 15, name: "fwfwf" }, { id: 26, name: "fwfwf" }, { id: 34, name: "fwfwf" }, { id: 45, name: "fwfwf" }, { id: 58, name: "fwfwf" }, { id: 67, name: "fwfwf" },
      { id: 15, name: "fwfwf" }, { id: 27, name: "fwfwf" }, { id: 36, name: "fwfwf" }, { id: 49, name: "fwfwf" }, { id: 55, name: "fwfwf" }, { id: 63, name: "fwfwf" },
      { id: 19, name: "fwfwf" }, { id: 20, name: "fwfwf" }, { id: 38, name: "fwfwf" }, { id: 41, name: "fwfwf" }, { id: 53, name: "fwfwf" }, { id: 62, name: "fwfwf" }]

      return (
            <View style={styles.container} >
                  <SafeAreaView style={styles.safearea}>
                  <Header title="Orders"/>
                        <View style={{ paddingVertical: 0 }}>
                              
                              <FlatList
                                    data={ordersList}
                                    contentContainerStyle={{ marginHorizontal: 5, paddingBottom: screenHeight/12 }}
                                    showsVerticalScrollIndicator={true}
                                    keyExtractor={(item, index) => item?.id + index.toString()}
                                    onEndReachedThreshold={0.5}
                                    renderItem={({ item }) => item && <OrderHistoryItems />}
                              />
                        </View>
                  </SafeAreaView>
            </View>
      );
};
export default OrderHistory;

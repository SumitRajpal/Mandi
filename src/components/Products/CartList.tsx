
import React from "react";
import { ActivityIndicator, Modal, ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "src/constants/font";
import DefaultCategory from "../DefaultCategory";
import ProductListItem from "../ProductListItem";
import Footer from "../footer";

const styles = StyleSheet.create({
      container: {
            flex: 1.0,
            height:"auto",
      },
      parent:{
            marginVertical:5
      }

});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const CartList = (): JSX.Element =>
<View>
<ScrollView style={styles.container}>
            <View >
                  <View style={styles.parent}>
                        <ProductListItem/>
                  </View>
                  <View style={styles.parent}>
                        <ProductListItem/>
                  </View>
                  <View style={styles.parent}>
                        <ProductListItem/>
                  </View>
            </View>
      </ScrollView>
      </View>
export default CartList;

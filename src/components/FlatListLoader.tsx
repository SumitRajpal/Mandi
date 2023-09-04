import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

/**
 * List is the component to render list item in screens.
 * @property {boolean} isNext -Accepts the boolean to show view on value
 */
const styles = StyleSheet.create({
  footerLoaderView: {
    height: 100,
    justifyContent: "center"
  },
  footerLoader: {
    alignSelf: "center"
  },
  footerList: {
    height: 30,
    justifyContent: "center"
  }
});
interface IFlatLoader {
  isNext: boolean
}
const FlatListLoader = (props: IFlatLoader) => {
  const { isNext } = props
 return  isNext ? (
    <View style={styles.footerLoaderView}>
      <ActivityIndicator size={36} style={styles.footerLoader} animating />
    </View>
  ) : (
    <View style={styles.footerList} />
  );
}
export default FlatListLoader;

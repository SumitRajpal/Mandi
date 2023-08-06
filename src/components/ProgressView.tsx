
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { COLORS } from "src/constants/font";

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: "center"
  },
  indicatorView: {
    backgroundColor: COLORS.primaryWhite,
    alignSelf: "center",
    padding: 30,
    borderRadius: 50
  }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const ProgressView = (): JSX.Element => 

<Modal visible transparent style={{ zIndex: 1 }}>
  <View style={styles.container}>
    <View style={styles.indicatorView}>
      <ActivityIndicator size="large" animating color={COLORS.primaryBlue} />
    </View>
  </View>
</Modal>;

export default ProgressView;

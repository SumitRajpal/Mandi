
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT, screenHeight } from "src/constants";
import Text from "./Text";

interface IRadioButton {
  options:any, 
  selectedOption:any, 
  onSelect(value: any): any;
}

export default function RadioButtons(props:IRadioButton) {
  const {options, selectedOption, onSelect } =  props
  return (
    <View style={styles.row}>
      {options.map((item:any) => (
        <View key={item.key} style={[styles.buttonContainer]} >
          <TouchableOpacity
            style={[styles.circle]}
            onPress={() => {
              onSelect(item);
            }}
          >
            {selectedOption && selectedOption?.key === item.key && (
              <View style={styles.checkedCircle} />
            )}
          </TouchableOpacity>
          <Text
            weight={(selectedOption?.key === item.key) ? FONT_WEIGHT.heavy:FONT_WEIGHT.medium}
            size={FONT_SIZE.large}
            numberOfLines={1}
            isPoppins={true}
            color={COLORS.text_black}
            style={styles.textMargin}
          >
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primaryGreen
  },
  row: {
    flex:1,
    gap :  20,
    flexWrap:"wrap",
    justifyContent:"center",
    flexDirection: "column"
  },
  textMargin: {
    marginHorizontal: 15
  }
});

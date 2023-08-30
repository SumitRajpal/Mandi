// SearchBar.js
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { COLORS, KEYBOARD_TYPE, screenHeight, screenRatio, screenWidth } from "src/constants";
import Icon from 'react-native-vector-icons/AntDesign';
import {DefaultInput} from "src/components";


const DefaultSearchBar = () => {
      const [clicked, setClicked] = useState(false)
      const [searchPhrase, setSearchPhrase] = useState("")

      return (
            <View style={styles.container}>
                  <View
                        style={
                              clicked
                                    ? styles.searchBar__clicked
                                    : styles.searchBar__unclicked
                        }
                  >

                        <Icon name="search1"
                              size={screenRatio * 16}
                              style={{ marginLeft: 5 }}
                              color={COLORS.text_black}
                        />


                        <DefaultInput
                              border={{ borderWidth: 0}}
                              style={[styles.input]}
                              keyboardType={KEYBOARD_TYPE.deafult}
                              value={searchPhrase}
                              onFocus={() => setClicked(true)}
                              placeholderText={"Search"}
                              onChangeText={setSearchPhrase}
                        />

                        {clicked && searchPhrase && (
                              <Icon name="closecircle"
                                    size={screenRatio * 15}
                                    style={{ marginRight: 5 }}
                                    color={COLORS.text_black}
                                    onPress={() => {
                                          setSearchPhrase("")
                                    }}
                              />
                        )}
                  </View>
            </View>
      );
};
export default DefaultSearchBar;

// styles
const styles = StyleSheet.create({
      container: {
            padding: 0,
            flex:1,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            height:screenHeight/18,
            width: screenWidth
      },
      searchBar__unclicked: {
            padding: 0,
            flexDirection: "row",
            flex:1,
            borderColor:COLORS.secondaryGray,
            borderWidth:1,
            height:screenHeight/18,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            width:"95%",
            alignItems: "center",
      },
      searchBar__clicked: {
            padding: 0,
            borderColor:COLORS.secondaryGray,
            borderWidth:1,
            flexDirection: "row",
            height:screenHeight/18,
            width:"95%",
            backgroundColor: COLORS.white,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "space-evenly",
      },
      input: {
            fontSize: 10,
            marginLeft: 0,
            borderWidth: 0,
            height:screenHeight/16,
            width: "80%",
      }
});
import React, { useMemo } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT, WEB_SERVICES, screenRatio } from "src/constants";
import Icon from 'react-native-vector-icons/FontAwesome6';
import DefaultLabel from "./DefaultLabel";
import { api } from "src/api/http";
import { useQuery } from "@tanstack/react-query";
import FMIcon from 'react-native-vector-icons/FontAwesome6';

const defaultStyles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: COLORS.white
      },
});

const AddressList = () => {
      const fetchAppVersion = () => api({ url: WEB_SERVICES.user.getAddress });
      const { isLoading: isLoadingAppVersion, data: adddressDataList } =
            useQuery(["getAddress"],
                  fetchAppVersion,
                  {
                        onError: () => {

                        },
                        onSuccess: (response: any) => {


                        }
                  }
            );
      const addressList = useMemo(
            () => adddressDataList?.rows || [],
            [adddressDataList]
      );
      return (
            <View style={defaultStyles.container}>
                  <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20, flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <View style={{ flex: 2 }}>
                              <FMIcon name="plus" size={screenRatio * 20} color={COLORS.tertiaryGray} />
                        </View>
                        <View style={{ flex: 16, borderBottomWidth: 0, borderColor: COLORS.primaryGray }}>
                              <DefaultLabel styles={{ color: COLORS.tertiaryGray, padding: 5 }} weight={FONT_WEIGHT.medium} size={FONT_SIZE.large} title={"Add New Address"} />
                        </View>
                  </View>
                  <FlatList
                        scrollEnabled={false}
                        data={addressList}
                        numColumns={1}
                        showsHorizontalScrollIndicator={true}
                        keyExtractor={(item, index) => item?.id + index.toString()}
                        renderItem={({ item }) => item &&
                              <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", gap: 20, backgroundColor: COLORS.primaryGray, padding: 10, marginVertical: 5, borderRadius: 10 }}>
                                    <View style={{ flex: 1.5 }}>
                                          <View style={{ flex: 1, borderRadius: 15, padding: 10, backgroundColor: COLORS.primaryGray, height: screenRatio * 40, width: screenRatio * 40 }}>
                                                <Icon name="house" size={screenRatio * 20} color={COLORS.tertiaryGray} />
                                          </View>
                                    </View>
                                    <View style={{ flex: 9, alignItems: "flex-start", alignContent: "center", alignSelf: "center" }}>
                                          <DefaultLabel weight={FONT_WEIGHT.light} size={FONT_SIZE.medium} title={`${item?.address_1 || ''},${item?.address_2 || ''},${item?.landmark || ''} ${item?.pincode || ''}`} />
                                    </View>
                              </View>}
                  />
            </View>
      );
}
export default AddressList;

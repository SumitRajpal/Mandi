
import React, { useMemo } from "react";
import { ActivityIndicator, FlatList, Image, Modal, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { DefaultLabel, Text } from "src/components";
import { SCREEN_IDENTIFIER, WEB_SERVICES, screenHeight, screenWidth } from "src/constants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "src/screens";
import { useQuery } from "@tanstack/react-query";
import { api } from "src/api/http";

const defaultStyles = StyleSheet.create({
      shopcontainer: {
            flex: 1.0,
            justifyContent: "flex-start"
      },
      container: {
            flex: 6,
            padding: 0,
            backgroundColor: COLORS.secondaryBlue,
            height: "100%",
            width: "100%",
            alignContent: "flex-start",
            borderRadius: 15,
      },
      parentContainer: {
            flex: 1,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
            height: screenHeight / 5.5,
            width: screenWidth / 4.6,
      },
      imageFeatures: {
            flex: 1,
            padding: 10,
            shadow: {
                  ...Platform.select({
                        android: {
                              elevation: 2,
                              shadowColor: COLORS.primaryBlue
                        },
                        ios: {
                              shadowColor: COLORS.sky,
                              shadowOpacity: 0.3,
                              shadowRadius: 1,
                              shadowOffset: { width: 0, height: 1 }
                        }
                  }),
                  backgroundColor: COLORS.sky,
                  borderRadius: 4
            }
      },
      image: {
            flex: 1
      },
      text: {
            alignSelf: "center",
            overflow: "visible",
            lineHeight: 16
      },
      title: {
            padding: 0,
            flex: 4
      }
});

/**
 * ProgressView is Function Component to render indicator modal
 * @property {bool} visible - show modal
 */

const ShopCategory = (): JSX.Element => {

      const fetchAppVersion = () => api({ url: WEB_SERVICES.category.getCategory });

      const { isLoading: isLoadingAppVersion, data: categoryListData, refetch } = useQuery(["getCategory"],
            fetchAppVersion,
            {
                  onError: () => {

                  },
                  onSuccess: (response: any) => {


                  }
            }
      );

      const categoryList = useMemo(
            () => categoryListData?.rows || [],
            [categoryListData]
      );

      return (

            <View style={defaultStyles.shopcontainer}>

                  <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", justifyContent: "flex-start" }}>
                        <View style={{ flex: 1, alignItems: "flex-start", alignContent: "flex-start", padding: 10 }}>
                              <DefaultLabel size={FONT_SIZE.large} weight={FONT_WEIGHT.black} title="Category" />
                        </View>
                  </View>

                  <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", marginHorizontal: 5 }}>
                        <FlatList
                               scrollEnabled={false}
                              data={categoryList}
                              numColumns={4}
                              showsHorizontalScrollIndicator={true}
                              keyExtractor={(item, index) => item?.category_id + index.toString()}
                              renderItem={({ item }) => item && <DefaultCategory key={item.category_id} title={item?.name} imageUri={item?.image} data={item} />}
                        />
                  </View>
            </View>
      )
}
interface IDefaultImage {
      imageStyles?: any,
      styles?: any,
      imageUri: any,
      title: string,
      data: any
}
export const DefaultCategory = (props: IDefaultImage): JSX.Element => {
      const { styles, imageStyles, imageUri, title } = props
      type StackNavigation = StackNavigationProp<StackParamList>;
      const navigation = useNavigation<StackNavigation>();
      return (

            <View style={{ flex: 1, alignItems: "center",padding:!!title? 0:10 }}>

                  <View style={[defaultStyles.parentContainer, styles]}>

                        <View style={[defaultStyles.container, styles]}>
                              <View style={defaultStyles.imageFeatures}>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate((SCREEN_IDENTIFIER.ProductList.identifier) as never)} >
                                          <Image

                                                style={[defaultStyles.image, imageStyles]}
                                                source={{ uri: imageUri }}
                                          />
                                    </TouchableOpacity>
                              </View>

                        </View>
                      { !!title && <View style={defaultStyles.title}>
                              <DefaultLabel size={FONT_SIZE.regular} title={title} />
                        </View>}

                  </View>

            </View>

      );
}

export default ShopCategory;

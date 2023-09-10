import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useMemo } from "react"
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants/font";
import { PAGINATION_SIZE, WEB_SERVICES, screenHeight, screenRatio, screenWidth } from "src/constants";

import OrderHistoryItems from "src/components/OrderHItoryItems";
import Header from "src/components/header";
import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "src/api/http";
import { FlatListLoader } from "src/components";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

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


  const fetchOrder = async ({ pageParam = 0 }) => {
    const data = await api({
      url: WEB_SERVICES.invoice.getInvoice,
      method: WEB_SERVICES.method.GET,
      params: {
        size: PAGINATION_SIZE.size,
        page: pageParam
      }
    });
    return {
      response: data,
      nextPage: data?.last === false ? data.number + 1 : null
    };
  };
  const {
    isLoading,
    data: orderListData,
    hasNextPage,
    fetchNextPage,
    refetch,
    isError,
    error,
    isFetchingNextPage
  } = useInfiniteQuery(
    [
      "fetchOrderHistory",
    ],
    fetchOrder,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage
    }
  );

  const fetchMoreOrder = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const ordersList = useMemo(
    () => orderListData?.pages?.flatMap((page) => page?.response?.content),
    [orderListData]
  );

  return (
    <View style={styles.container} >
      <SafeAreaView style={styles.safearea}>
        <Header title="Orders" />
        <View style={{ paddingVertical: 0 }}>

         { isLoading ?<View
            style={{ backgroundColor: COLORS.white, height: screenHeight, padding: 20 }}>
            <SkeletonPlaceholder  borderRadius={4} >
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                
                <SkeletonPlaceholder.Item marginLeft={20}>
                  <SkeletonPlaceholder.Item width={220} height={20} />
                  <SkeletonPlaceholder.Item marginTop={6} width={180} height={15} />
                

                  <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                  <SkeletonPlaceholder.Item marginTop={10} marginRight={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                </SkeletonPlaceholder.Item>

                  <SkeletonPlaceholder.Item marginTop={10} width={screenWidth / 1.26} height={30} />

                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder>
            <View style={{marginVertical:screenRatio*20}}/>
            <SkeletonPlaceholder  borderRadius={4} >
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                
                <SkeletonPlaceholder.Item marginLeft={20}>
                  <SkeletonPlaceholder.Item width={220} height={20} />
                  <SkeletonPlaceholder.Item marginTop={6} width={180} height={15} />
                

                  <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                  <SkeletonPlaceholder.Item marginTop={10} marginRight={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                </SkeletonPlaceholder.Item>

                  <SkeletonPlaceholder.Item marginTop={10} width={screenWidth / 1.26} height={30} />

                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder>
            <View style={{marginVertical:screenRatio*20}}/>
            <SkeletonPlaceholder  borderRadius={4} >
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                
                <SkeletonPlaceholder.Item marginLeft={20}>
                  <SkeletonPlaceholder.Item width={220} height={20} />
                  <SkeletonPlaceholder.Item marginTop={6} width={180} height={15} />
                

                  <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                  <SkeletonPlaceholder.Item marginTop={10} marginRight={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                  <SkeletonPlaceholder.Item marginTop={10} marginHorizontal={10} width={60} height={60} borderRadius={10} />
                </SkeletonPlaceholder.Item>

                  <SkeletonPlaceholder.Item marginTop={10} width={screenWidth / 1.26} height={30} />

                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder>
          </View> :
          <FlatList
            data={ordersList}
            numColumns={1}
            onEndReached={fetchMoreOrder}
            contentContainerStyle={{ marginHorizontal: 5, paddingBottom: screenRatio * (screenHeight / 28) }}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => item?.invoice_id + index.toString()}
            onEndReachedThreshold={0.2}
            renderItem={({ item }) => item && <OrderHistoryItems key={item?.invoice_id} data={item} />}
            ListFooterComponent={
              <FlatListLoader isNext={isFetchingNextPage} />
            } />}
        </View>
      </SafeAreaView>
    </View>
  );
};
export default OrderHistory;

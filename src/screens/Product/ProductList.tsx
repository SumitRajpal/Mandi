import { useInfiniteQuery } from "@tanstack/react-query"
import React, { useMemo, useState } from "react"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import FMIcon from "react-native-vector-icons/FontAwesome6"
import { api } from "src/api/http"
import { DefaultLabel, DefaultSearchBar, FlatListLoader } from "src/components"
import CartProduct from "src/components/CartProduct"
import ProductSorting from "src/components/ProductSorting"
import Footer from "src/components/footer"
import {
  PAGINATION_SIZE,
  WEB_SERVICES,
  screenHeight,
  screenRatio,
  screenWidth,
} from "src/constants"
import { COLORS } from "src/constants/font"
import { CartStore } from "src/context/AuthProvider"
const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  cartText: {
    flex: 1,
    color: COLORS.primaryGreen,
    letterSpacing: 1,
  },
  cartFlex: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: screenRatio * (screenWidth / 6),
    height: "100%",
    padding: screenRatio * 6,
    borderColor: COLORS.primaryGreen,
    borderWidth: 1,
    borderRadius: screenRatio * 6,
    backgroundColor: COLORS.secondaryBlue,
    justifyContent: "center",
  },
})
const ProductList = (): JSX.Element => {
  const cart = CartStore((state: any) => state.cart)
  const [sortVisible, setSortVisible] = useState(false)
  const [searchOrderText, setSearchOrderText] = useState("")
  const { cartObject } = CartStore((state) => {
    return { cartObject: state.cart };
});

const cartMemo = useMemo(() => cart, [cart]);
console.log(cartMemo,"memo")
  
  const fetchOrder = async ({pageParam = 0}) => {
    const data = await api({
      url: WEB_SERVICES.products.getProducts,
      method: WEB_SERVICES.method.GET,
      params: {
        filter: {tags: searchOrderText},
        size: PAGINATION_SIZE.size,
        page: pageParam,
      },
    })
    return {
      response: data,
      nextPage: data?.last === false ? data.number + 1 : null,
    }
  }
  
  
  const {
    isLoading,
    data: orderListData,
    hasNextPage,
    fetchNextPage,
    refetch,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["fetchProductList", searchOrderText.length > 2 ? searchOrderText : ""],
    fetchOrder,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  )

  const fetchMoreOrder = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  const ordersList = useMemo(
    () => orderListData?.pages?.flatMap((page) => page?.response?.content),
    [orderListData],
  )
  return (
    <View style={defaultStyles.container}>
      <SafeAreaView style={defaultStyles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View
            style={{
              flex: 0.6,
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              padding: 10,
            }}
          >
            <DefaultSearchBar
              searchValue={searchOrderText.trim()}
              onChangeText={(phone: any) => {
                setSearchOrderText(String(phone).trim())
              }}
            />
          </View>
          <View style={{flex: 0.5, paddingVertical: 5, paddingHorizontal: 10}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => setSortVisible(!sortVisible)}
            >
              <View style={defaultStyles.cartFlex}>
                <View style={{flex: 0.5}}>
                  <FMIcon
                    name="arrow-down"
                    size={screenRatio * 8}
                    color={COLORS.primaryGreen}
                  />
                </View>
                <View style={{flex: 0.5}}>
                  <FMIcon
                    name="arrow-up"
                    size={screenRatio * 8}
                    color={COLORS.primaryGreen}
                  />
                </View>
                <View style={{flex: 2}}>
                  <DefaultLabel
                    styles={defaultStyles.cartText}
                    title={"Sort"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 9}}>
            {isLoading ? (
              <View
                style={{
                  gap: 20,
                  flex: 1,
                  backgroundColor: COLORS.white,
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <View style={{flex: 1}}>
                  <SkeletonPlaceholder borderRadius={10}>
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center"
                    >
                      <SkeletonPlaceholder.Item marginLeft={0}>
                        <SkeletonPlaceholder.Item
                          width={screenWidth / 2.2}
                          height={screenHeight / 3.5}
                          borderRadius={10}
                        />
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder>
                </View>
                <View style={{flex: 1}}>
                  <SkeletonPlaceholder borderRadius={10}>
                    <SkeletonPlaceholder.Item
                      flexDirection="row"
                      alignItems="center"
                    >
                      <SkeletonPlaceholder.Item marginLeft={0}>
                        <SkeletonPlaceholder.Item
                          width={screenWidth / 2.2}
                          height={screenHeight / 3.5}
                          borderRadius={10}
                        />
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder>
                </View>
              </View>
            ) : (
              <FlatList
                data={ordersList}
                numColumns={2}
                onEndReached={fetchMoreOrder}
                contentContainerStyle={{
                  marginHorizontal: 5,
                  paddingBottom: screenRatio * (screenHeight / 28),
                }}
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) =>
                  item?.product_id + index.toString()
                }
                onEndReachedThreshold={0.2}
                renderItem={({item}) =>
                  item && <CartProduct key={item?.product_id} data={item} />
                }
                ListFooterComponent={
                  <FlatListLoader isNext={isFetchingNextPage} />
                }
              />
            )}
          </View>
        </View>
        <ProductSorting visible={sortVisible} />
        {!!Object.keys(cartMemo)?.length && <Footer key={"footer"} />}
      </SafeAreaView>
    </View>
  )
}
export default React.memo(ProductList)

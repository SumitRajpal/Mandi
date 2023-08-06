import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, {  } from "react"
import { COLORS } from "src/constants/font";
import { api } from "src/api/http";
import { WEB_SERVICES } from "src/constants";
import { useQuery } from "@tanstack/react-query";
import ProgressView from "src/components/ProgressView";

const Home = (): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flex: 1.0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.secondaryWhite
    },
  });
  const fetchUserDetails = () => api({ url: `${WEB_SERVICES.user.getUser}` });

  const { isLoading: isLoadingAppVersion, refetch } = useQuery(["userDetails"],
  fetchUserDetails,
    {
      onError: (error) => {
        console.log(error)
      },
      onSuccess: (response:any) => {
        console.log(response)
        }
      }
  );
  return (
    <View style ={styles.container} >
      <Text>Home</Text>
     
    </View>
  );
};
export default Home;

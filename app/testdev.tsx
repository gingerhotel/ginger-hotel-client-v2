import * as React from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { getHotel } from "../api/hotelApi";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOTEL_URL } from "../api/url";

export default function testDev() {
  
  const [ ip , setIp ] = React.useState();
 
  React.useEffect( () => {
    const URL = 'https://geolocation-db.com/json'
      axios.get(URL)
      .then((res) => {
        console.log(res);
        setIp(res.data.IPv4)
      })

    },[])

  return (
    <>
      <View>
        <Text>{ip}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 20,
    backgroundColor: "darkgray",
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

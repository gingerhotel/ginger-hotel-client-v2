import * as React from "react";
import {
  Image, TouchableOpacity,
} from "react-native";
import { View, StyleSheet } from "react-native";
import { SvgImg } from "../components/svgImg";
import * as WebBrowser from "expo-web-browser";

import Swiper from "react-native-web-swiper";
const banner1 = require("../assets/banner/banner1.jpg");
const banner2 = require("../assets/banner/banner2.jpg");
const banner3 = require("../assets/banner/banner3.jpg");

const banners = [
  { 
    url : "https://www.instagram.com/p/C1D73SYPi_S/?igshid=MTdlMjRlYjZlMQ==",
    img : banner1
  },
  { 
    url : "https://www.instagram.com/p/C0fxJEsPFUz/?igshid=MTdlMjRlYjZlMQ==",
    img : banner2
  },
  { 
    url : "https://www.instagram.com/gingerhotel_official?igshid=YzVkODRmOTdmMw==",
    img : banner3
  },
];

export default function EventBanner() {

  React.useEffect(() => {
    //const data = getHotel("1");
  }, []);

  return (
    <View style={styles.container}>
        <Swiper loop timeout={5}>
        {
          banners.map(data => (
            <View style={styles.slideContainer}>
              <TouchableOpacity onPress={()=> {
                WebBrowser.openBrowserAsync(data.url)
              }}>
                <Image source={data.img} style={{height: 60}} resizeMode="contain"/>
              </TouchableOpacity>
            </View>
          ))
        }
        </Swiper>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
      height: 60,
  },
  slideContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
});

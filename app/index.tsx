import { View, Text, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { Link, Redirect, router } from "expo-router";
import { SvgImg } from "../components/svgImg";
const splash = require("../assets/gingerman/splash.png");

export default function Page() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/hotel/1");
    }, 2000);
  }, []);
  return (
    <Link href={"/hotel/1"}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={splash} />
      </View>
    </Link>
  );
}

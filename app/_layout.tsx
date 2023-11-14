import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import hotels from "./tabs/hotels";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import mailbox from "./mailbox";
import Navigation from "./navigation";
import { StyleSheet, View } from "react-native";
import { RecoilRoot } from "recoil";

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}





export default App;

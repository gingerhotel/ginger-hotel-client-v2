import React from "react";
import Navigation from "./navigation";
import { useFonts } from "expo-font";

function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    "NanumSquareNeo-Variable": require("../assets/fonts/NanumSquareNeo-Variable.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  }

  return <Navigation />;
}

export default App;

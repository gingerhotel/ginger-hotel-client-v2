import React from "react";
import Navigation from "./navigation";
import { useFonts } from "expo-font";

function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    "NanumSquareNeo-Variable": require("../assets/fonts/NanumSquareNeo-Variable.ttf"),
    "SOYOMaple-Regular": require("../assets/fonts/SOYO-Maple-Regular.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  }

  return <Navigation />;
}

export default App;

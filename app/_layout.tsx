import React from "react";
import Navigation from "./navigation";
import { useFonts } from "expo-font";
import { RecoilRoot } from "recoil";

function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    "NanumSquareNeo-Variable": require("../assets/fonts/NanumSquareNeo-Variable.ttf"),
    "SOYOMaple-Regular": require("../assets/fonts/SOYO-Maple-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;

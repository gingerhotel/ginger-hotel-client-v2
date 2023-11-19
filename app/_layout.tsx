import React from "react";
import Navigation from "./navigation";
import { useFonts } from "expo-font";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient();

function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    "NanumSquareNeo-Variable": require("../assets/fonts/NanumSquareNeo-Variable.ttf"),
    "SOYOMaple-Regular": require("../assets/fonts/SOYO-Maple-Regular.ttf"),
    "Quicksand-Variable": require("../assets/fonts/Quicksand-VariableFont_wght.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

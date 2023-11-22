import React, { useEffect } from "react";

import Navigation from "./navigation";
import { useFonts } from "expo-font";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query"
import * as Updates from "expo-updates";
const queryClient = new QueryClient();

function App(): JSX.Element {
  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  const [fontsLoaded] = useFonts({
    "NanumSquareNeo-Variable": require("../assets/fonts/NanumSquareNeo-Variable.ttf"),
    "SOYOMaple-Regular": require("../assets/fonts/SOYO-Maple-Regular.ttf"),
    "Quicksand-Variable": require("../assets/fonts/Quicksand-VariableFont_wght.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  }

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      //alert(`Error fetching latest Expo update: ${error}`);
    }
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

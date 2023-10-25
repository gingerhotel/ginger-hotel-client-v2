import * as React from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "../../components/header";

const AllVillage = () => <View style={{ flex: 1, backgroundColor: "white" }} />;

const MyVillage = () => <View style={{ flex: 1, backgroundColor: "white" }} />;

const renderScene = SceneMap({
  all: AllVillage,
  my: MyVillage,
});

export default function Village() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "all", title: "진저호텔 둘러보기" },
    { key: "my", title: "내 진저 빌리지" },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "black" }}
      style={{ color: "black", backgroundColor: "white" }}
      renderLabel={({ route }) => (
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <>
      <Header />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}

const styles = StyleSheet.create({});

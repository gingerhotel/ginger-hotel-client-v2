import * as React from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "../../components/header";
import { MonoText } from "../../components/styledText";
import VillageHeader from "../../components/villageHeader";

const AllVillage = () => <View style={{ flex: 1, backgroundColor: "white" }} />;

const MyVillage = () => (
  <View
    style={{
      backgroundColor: "white",
      alignItems: "center",
      height: "100%",
    }}
  >
    <MonoText style={styles.info}>
      상대방은 내 빌리지를 볼 수 없어요 {"\n"}
      상대방은 내 빌리지에 추가된 사실을 알 수 없어요
    </MonoText>
  </View>
);

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
      <VillageHeader />
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

const styles = StyleSheet.create({
  info: {
    padding: 20,
    backgroundColor: "darkgray",
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

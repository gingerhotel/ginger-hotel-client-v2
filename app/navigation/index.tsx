import React from "react";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import TabOneScreen from "../tabs";
import TabTwoScreen from "../tabs/hotels";
import TabThreeScreen from "../tabs/my";
import Push from "../push";
import ModalScreen from "../modal";
import MailBox from "../mailbox";
import { FontAwesome } from "@expo/vector-icons";
import Letter from "../letter";
import LetterCompleted from "../letterCompleted";
import Answer from "../answer";
import Toast from "react-native-toast-message";
import { toastConfig } from "../../components/toast";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarInactiveTintColor: "gray",
        })}
        initialRouteName="hotels"
      >
        <Tab.Screen
          options={{
            title: "빌리지",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
          name="빌리지"
          component={TabOneScreen}
        />
        <Tab.Screen
          options={{
            title: "진저호텔",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="hotel" color={color} />
            ),
          }}
          name="hotels"
          component={TabTwoScreen}
        />
        <Tab.Screen
          options={{
            title: "MY",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
          name="MY"
          component={TabThreeScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <NavigationContainer
        independent={true}
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="test" component={renderTabNavigation} />
          <Stack.Screen name="push" component={Push} />
          <Stack.Screen name="modal" component={ModalScreen} />
          <Stack.Screen name="mailbox" component={MailBox} />
          <Stack.Screen name="letter" component={Letter} />
          <Stack.Screen name="completed" component={LetterCompleted} />
          <Stack.Screen name="answer" component={Answer} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast config={toastConfig} />
    </>
  );
};

export default Navigation;

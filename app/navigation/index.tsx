import React from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import Village from "../tabs/village";
import Hotel from "../tabs/hotels";
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
import CreateHotelName from "../createHotelName";
import createHotelAgree from "../createHotelAgree";
import createHotelSelect from "../createHotelSelect";
import CreateHotel from "../create";
import GingerCard from "../gingercard";
import Login from "../login";
import { colors } from "../../constants/Colors";
import Header from "../../components/appHeader";
import { SvgImg } from "../../components/svgImg";
import { MonoText } from "../../components/styledText";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Navigation = () => {
  const arrow = require("../../assets/icon/i_arrow_back.svg");
  const navigation = useNavigation();

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
          component={Village}
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
          component={Hotel}
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
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="test"
            component={renderTabNavigation}
          />
          <Stack.Screen name="push" component={Push} />
          <Stack.Screen name="modal" component={ModalScreen} />
          <Stack.Screen name="mailbox" component={MailBox} />
          <Stack.Screen
            name="letter"
            component={Letter}
            options={{
              header: () => <Header title="답장보내기" />,
            }}
          />
          <Stack.Screen name="completed" component={LetterCompleted} />
          <Stack.Screen name="answer" component={Answer} />
          <Stack.Screen name="gingercard" component={GingerCard} />
          <Stack.Screen name="hotelcreate" component={CreateHotel} />
          <Stack.Screen name="hotelname" component={CreateHotelName} />
          <Stack.Screen name="hotelselect" component={createHotelSelect} />
          <Stack.Screen name="hotelagree" component={createHotelAgree} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast config={toastConfig} />
    </>
  );
};

export default Navigation;

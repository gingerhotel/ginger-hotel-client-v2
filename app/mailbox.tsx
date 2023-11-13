import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Button,
  ScrollView,
  View,
  Text,
} from "react-native";
import Buttons from "../components/buttons";
import LetterItem from "../components/letterItem";
import MailHeader from "../components/mailHeader";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabBar } from "react-native-tab-view";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";
import { format } from "date-fns";
import ReplyItem from "../components/replyItem";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function MailBox({ navigation }: any) {
  const [newMailCount, setNewMailCount] = useState(5); // 새로운 편지 개수 상태
  const [replyMailCount, setReplyMailCount] = useState(3); // 답장하기 개수 상태

  const SubTabs = () => {
    // 현재 날짜를 가져옵니다.
    const currentDate = new Date();
    // 날짜 형식을 지정합니다.
    const formattedDate = format(currentDate, "yyyy.MM.dd");

    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: colors.Whiteyello,
          tabBarInactiveTintColor: colors.grey600,
          tabBarStyle: { backgroundColor: colors.greyblack },
          tabBarLabelStyle: styles.tabText,
          tabBarItemStyle: {
            width: "auto",
            marginLeft: 20,
            padding: 0,
            top: 10,
          },
          tabBarContentContainerStyle: {
            height: 64,
            borderBottomColor: colors.grey800,
            borderBottomWidth: 0.5,
          },
          tabBarIndicatorStyle: {
            marginLeft: 8,
            backgroundColor: colors.green500,
            height: 1,
          },
        }}
      >
        <Tab.Screen
          name="First"
          options={{ tabBarLabel: `새로운 편지 ${newMailCount}` }}
          component={newMail}
        />
        <Tab.Screen
          name="Second"
          options={{ tabBarLabel: `답장하기 ${replyMailCount}` }}
          component={replyMail}
        />
      </Tab.Navigator>
    );
  };

  const newMail = () => {
    return (
      <ScrollView>
        <View style={styles.mailbox_items}>
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
        </View>
      </ScrollView>
    );
  };

  const replyMail = () => {
    return (
      <ScrollView>
        <View style={styles.mailbox_items}>
          <ReplyItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <ReplyItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <ReplyItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <ReplyItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <ReplyItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
        </View>
      </ScrollView>
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
        <SubTabs />
      </NavigationContainer>
      {/* <View style={styles.btn_wrapper}>
        <Buttons
          navigation={navigation}
          url={"gingercard"}
          title="진저맨 카드"
          color="green"
        />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#1E1F23",
  },
  mailbox_items: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: "#1E1F23",
    height: "100%",
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
  letter_img: {
    width: 150,
    height: 40,
  },
  btn_wrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1E1F23",
  },
  tabText: {
    fontFamily: typography.basic.fontFamily,
    fontSize: 16,
    fontWeight: "700",
  },
});

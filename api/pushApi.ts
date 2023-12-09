import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { NOTI_URL, ORIGIN_URL } from "./url";

export const myNotifications = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    axios.defaults.headers.common["Origin"] = ORIGIN_URL;
    const response = await axios.get(`${NOTI_URL}/my`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deviceNotifications = async (props: any) => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    axios.defaults.headers.common["Origin"] = ORIGIN_URL;
    const response = await axios.post(`${NOTI_URL}/device`, props);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};



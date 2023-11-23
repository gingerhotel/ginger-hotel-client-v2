import axios from "axios";
import { AUTH_URL, HOTEL_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewHotel, NewLetter } from "./interface";

const axiosConfig = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export const newHotel = async (props: NewHotel) => {
  try {
    axiosConfig();
    const response = await axios.post(`${AUTH_URL}/hotel`, props);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getHotel = async (code: string) => {
  try {
    axiosConfig();
    const response = await axios.get(`${HOTEL_URL}/${code}`);
    console.log(response.data.success);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};



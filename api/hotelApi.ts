import axios from "axios";
import { AUTH_URL, LETTERS_URL } from "./url";
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

// Need to be separated later.
export const newLetter = async (props: NewLetter) => {
  try {
    axiosConfig();
    const hotelOwner:Number = 0;
    const response = await axios.post(`${LETTERS_URL}/${1}`, props);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

import axios from "axios";
import { AUTH_URL, HOTEL_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewHotel, NewLetter } from "./interface";
import { axiosConfig } from "./commonApi";

axiosConfig();

export const newHotel = async (props: NewHotel) => {
  try {
    const response = await axios.post(`${AUTH_URL}/hotel`, props);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getHotel = async (id: string) => {
  try {
    const response = await axios.get(`${HOTEL_URL}/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};



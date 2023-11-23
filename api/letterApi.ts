import axios from "axios";
import { LETTERS_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentDate } from "../data/data";
import { NewLetter } from "./interface";


const axiosConfig = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export const newLetterData = async (props: any) => {
    const date = getCurrentDate()
    try {
        axiosConfig();
        const response = await axios.get(`${LETTERS_URL}/${props.hotelId}?date=${date}`);
        return response.data;
    } catch (e) {
        console.error(e);
        //throw e;
        return true;// Todo: Need to validate
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
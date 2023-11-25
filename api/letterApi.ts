import axios from "axios";
import { LETTERS_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentDate } from "../data/data";
import { NewLetter } from "./interface";
import { axiosConfig } from "./commonApi";

axiosConfig();

export const newLetterData = async (props: any) => {
    const date = getCurrentDate()
    try {
        const response = await axios.get(`${LETTERS_URL}/${props.hotelId}?date=${date}`);
        return response.data;
    } catch (e) {
        console.error(e);
        //throw e;
        return true; // Todo: Need to validate
    }
};

export const newLetter = async (props: NewLetter) => {
    try {
      const response = await axios.post(`${LETTERS_URL}/${props.hotelId}`, props);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
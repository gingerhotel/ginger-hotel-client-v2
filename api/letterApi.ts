import axios from "axios";
import { LETTERS_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentDate } from "../data/data";

export const newLetterData = async (props: any) => {
    const date = getCurrentDate()
    try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        const response = await axios.get(`${LETTERS_URL}/${props.hotelId}?date=${date}`);
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};


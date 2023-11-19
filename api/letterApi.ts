import axios from "axios";
import { LETTERS_URL } from "./url";
import { TodayLetterProps } from "./interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const newLetterData = async (props: any) => {

    const accessToken = await AsyncStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    console.log(props)
    return (
        await axios
            .get(`${LETTERS_URL}/${props?.hotelId}?data:${props.data}`)
            .then((response) => response.data)
            .catch((e) => console.log(e))
    )
}
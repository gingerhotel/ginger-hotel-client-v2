import axios from "axios";
import { UserApiResponse } from "./interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_URL } from "./url";

export const myDate = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");

  return await axios
    .get<UserApiResponse>(`${MEMBER_URL}/my`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return (response.data)

    })
    .catch((error) => {
      console.error(error);
    });
}

/*
import axios from "axios";
import { MEMBER_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { My } from "./interface";

export const myInfo = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    console.log(accessToken);
    const response: { data: My } = await axios.get(`${MEMBER_URL}/my`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
    //
  }
};
*/
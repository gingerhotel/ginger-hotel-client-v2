import axios from "axios";
import { AUTH_URL} from "./url";
import { Auth} from "./interface";
import { axiosConfig } from "./commonApi";

axiosConfig();
export const authGoogle = async (props: Auth) => {
  try {
    const response = await axios.post(`${AUTH_URL}/google`, props);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};





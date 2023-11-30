import axios from "axios";
import { REPLIES_URL } from "./url";
import { NewReply } from "./interface";

export const newReply = async (props: NewReply) => {
    try {
        const response = await axios.post(`${REPLIES_URL}/letter/${props.letterId}`, props);
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
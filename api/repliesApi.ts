import axios from "axios";
import { ORIGIN_URL, REPLIES_URL } from "./url";
import { NewReply } from "./interface";

export const newReply = async (props: NewReply) => {
  try {
    axios.defaults.headers.common["Origin"] = ORIGIN_URL;
    const response = await axios.post(
      `${REPLIES_URL}/letter/${props.letterId}`,
      props
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
export const replyDelete = async (replyId: number) => {
  try {
    axios.defaults.headers.common["Origin"] = ORIGIN_URL;
    const response = await axios.delete(`${REPLIES_URL}/${replyId}`);
    console.error(response);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const replyBlock = async (replyId: number) => {
  try {
    axios.defaults.headers.common["Origin"] = ORIGIN_URL;
    const response = await axios.post(`${REPLIES_URL}/${replyId}/block`);
    console.error(response);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
export const replyUnBlock = async (replyId: number) => {
  try {
    axios.defaults.headers.common["Origin"] = ORIGIN_URL;
    const response = await axios.post(`${REPLIES_URL}/${replyId}/unblock`);
    console.error(response);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

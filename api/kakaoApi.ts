import {
  login,
  logout,
  getProfile as getKakaoProfile,
} from "@react-native-seoul/kakao-login";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useMutation } from "react-query";
import { authKakao } from "./authApi";
import { UserApiResponse } from "./interface";
import { MEMBER_URL } from "./url";

export const RestApiKey = process.env.EXPO_PUBLIC_KAKAO_WEB_API_KEY;
export const redirectUrl = process.env.EXPO_PUBLIC_KAKAO_OAUTH_REDIRECT_URL;


export const signInWithKakao = async (
  codeWeb: string,
  onSuccess: Function,
  onError: Function
) => {
  try {
    const { access_token } = await login({
      restApiKeyWeb: RestApiKey,
      redirectUrlWeb: redirectUrl,
      codeWeb,
    });

    const kakao_data: any = await getKakaoProfile(access_token);
    const _data = {
      id: kakao_data.id,
      name: kakao_data.properties.nickname,
      ci: access_token,
    };

    try {
      const response = await authKakao(_data);
      const { status, data } = response;

      await AsyncStorage.setItem("accessToken", data?.accessToken);

      if (status === 200) {
        router.push("/create");
        onSuccess(data);
      } else if (status === 201) {
        axios
          .get<UserApiResponse>(`${MEMBER_URL}/my`, {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          })
          .then((response) => {
            const { hotel } = response.data;
            window.location.href = `/hotel/${hotel.id}`;
          });
      }
    } catch (error) {
      onError(error);
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const signOutWithKakao = async (tokenWeb: string): Promise<any> => {
  if (!tokenWeb) {
    console.log("로그인할 수 없는 상태");
    return;
  }
  try {
    const message = await logout(tokenWeb);
    return message;
  } catch (err) {
    console.error("signOut error", err);
  }
};

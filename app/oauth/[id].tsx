import { useEffect } from "react";
import { signInWithKakao } from "../../api/kakaoApi";
import { useRoute } from "@react-navigation/native";

export default function OAuth() {

    const route: any = useRoute();

    useEffect(() => {
        if (route.params && route.params.code) {
          signInWithKakao(
            route.params.code,
            (successData: any) => {
                // 처리 성공
            },
            (error: any) => {
                // 처리 실패
                location.href = '/hotel/1'
            }
          );
        }
      }, [route.params]);

    return;
}
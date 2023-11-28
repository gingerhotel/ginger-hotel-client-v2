import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, TextInput } from "react-native";
import Buttons from "../../components/buttons";
import { MonoText } from "../../components/styledText";
import { colors } from "../../constants/Colors";
import { useMutation } from "react-query";
import { newLetter } from "../../api/letterApi";

import styled from "styled-components/native";
import { router, useLocalSearchParams } from "expo-router";
import OneBtnModal from "../../components/Modal/OneBtnModal";
import { useNavigation } from "expo-router";


export default function Letter() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const { id } = useLocalSearchParams();

  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("letters");
    register("nickname");
  }, [register]);

  const [oneBtnModalVisible, setOneBtnModalVisible] = useState<boolean>(false);
  const closeoneBtnModal = () => {
    setOneBtnModalVisible(false);
  };
  // useEffect(()=>{
  //    setOneBtnModalVisible(true);
  // }, [])
  // error 코드 분기로, letterSubmit 함수 Catch 쪽에 setOneBtnModalVisible 실행하시면 됩니다. 
  // 버튼 띄우는거 테스트하려면 주석 푸시고 useEffect() 한번 로드해보세요

  const mutation = useMutation(
    // 이 함수가 서버로 데이터를 전송하는 역할을 합니다.
    newLetter,
    {
      onSuccess: (data) => {
        router.push("/letterCompleted")
        // 성공한 경우에 response 데이터를 사용할 수 있습니다.
      },
    }
  );

  const letterSubmit = async (data : any) => {
    try {
      const letterData = {
        content: data.letters,
        senderNickname: data.nickname,
        image: "",
        hotelId : id.toString()      
      };
      // 뮤테이션 실행
      await mutation.mutateAsync(letterData);
    } catch (error) {
      console.error("Mutation failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mailbox_items}>
        <MonoText style={{ color: colors.Whiteyello, marginBottom: 12 }}>
          따뜻한 편지를 보내 준 친구에게 마음을 전해요{" "}
        </MonoText>

        <TextInput
          style={styles.letter}
          multiline={true}
          numberOfLines={20}
          placeholder="전하고 싶은 말을 적어주세요!"
          onChangeText={(text) => setValue("letters", text)}
        />
        <View style={styles.nickname_input}>
          <MonoText style={styles.input_text}>받는 이</MonoText>
          <TextInput
            blurOnSubmit={true}
            style={styles.input}
            placeholder="닉네임을 입력하세요 (10자 이하)"
            onChangeText={(text) => setValue("nickname", text)}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Buttons
          is_width={true}
          url={"gingercard"}
          title="이미지 첨부"
          color="darkgray"
        />
        <MonoText>{'   '}</MonoText>
        <Buttons
          url={"letterCompleted"}
          title="보내기"
          is_width={true}
          color="green"
          callback={handleSubmit(letterSubmit)}
        />
      </View>
      <OneBtnModal
        height={300}
        visible={oneBtnModalVisible}
        onClose={closeoneBtnModal}
        name="zz"
        desc=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  mailbox_items: {
    backgroundColor: colors.greyblack,
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  nickname_input: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    backgroundColor: colors.grey900,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    borderRadius: 6,
    marginTop: 20,
    textAlign: "left",
    marginBottom: 20,
  },
  input_text: {
    fontSize: 12,
    color: colors.grey500,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 30,
    backgroundColor: colors.grey900,
    paddingLeft: 16,
    borderRadius: 6,
    textAlign: "left",
    fontSize: 16,
    color: colors.grey200,
    outlineStyle: "none",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.greyblack,
    alignItems: "center",
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
    border: "none",
    marginTop: -3,
  },
  letter: {
    width: 300,
    height: 400,
    backgroundColor: colors.grey900,
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 18,
    paddingRight: 18,
    textAlign: "left",
    border: "4px solid #719898",
    borderRadius: 12,
    color: colors.grey500,
    outlineStyle: "none",
    fontFamily: "NanumSquareNeo-Variable",
    lineHeight: 18,
  },
});

export const LetterOuterContainer = styled.View`
    border-radius: 18px;
    border-width: 2px;
    border-color: #25796B;
    width:384px;
    padding: 7px;
`

// Styled component with linear gradient
export const LetterInnerContainer = styled.View<{ b_color?: string }>`
  border-radius: 12px;
  border-width: 4px;
  border-color: #005142;
  background-color: ${(props) => props.b_color};
  border-style: dotted;
`;
export const LetterInnerInfoView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

export const LetterInnerTitieView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 310px;
    min-width: 310px;
    border-bottom-width: 1px;
    padding: 10px;

`


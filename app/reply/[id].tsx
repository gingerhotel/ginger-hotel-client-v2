import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, TextInput } from "react-native";
import Buttons from "../../components/buttons";
import { MonoText } from "../../components/styledText";
import { colors } from "../../constants/Colors";
import { useMutation } from "react-query";
import { newLetter } from "../../api/letterApi";

import styled from "styled-components/native";
import { router, useLocalSearchParams } from "expo-router";
import ErrorModal from "../../components/Modal/errorModal";
import { ErrorMessageConverter } from "../../data/error-message-converter";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { replyNameState } from "../../atom/letterAtom";
import ReplyBoxHeader from "../../components/replyBoxHeader";

export default function Reply() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    const { id } = useLocalSearchParams();
    console.log(id)
    const { register, handleSubmit, setValue } = useForm();
    const [isNotEmptyLetters, setIsNotEmptyLetters] = useState<boolean>(false);
    const [isNotEmptyNickname, setIsNotEmptyNickname] = useState<boolean>(false);

    const senderNickname = useRecoilValue(replyNameState);
    useEffect(() => {
        register("letters");
        register("nickname");
    }, [register]);

    const [ErrorModalVisible, setErrorModalVisible] = useState<boolean>(false);
    const [errorTitle, setErrorTitle] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [errorButtonMessage, setErrorButtonMessage] = useState<string>('');
    const closeErrorModal = () => {
        setErrorModalVisible(false);
    };

    const mutation = useMutation(
        newLetter, // 이 함수가 서버로 데이터를 전송하는 역할을 합니다.
        {
            onSuccess: (data) => {
                router.push("/letterCompleted") // 성공한 경우에 response 데이터를 사용할 수 있습니다.
            },
        }
    );

    const letterSubmit = async (data: any) => {
        try {
            const letterData = {
                content: data.letters,
                senderNickname: data.nickname,
                image: "",
                hotelId: id.toString()
            };
            // 뮤테이션 실행
            await mutation.mutateAsync(letterData);
        } catch (error: any) {
            if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403) {
                const obj = ErrorMessageConverter.convert(error.response.data.errorCode);
                setErrorTitle(obj[0]);
                setErrorMessage(obj[1]);
                setErrorButtonMessage('친구 호텔로 돌아가기');
                setErrorModalVisible(true);
            }
        }
    };

    return (
        <View style={styles.container}>
            <ReplyBoxHeader />
            <View style={styles.mailbox_items}>
                <MonoText style={{ color: colors.Whiteyello, marginBottom: 12 }}>
                    따뜻한 편지를 보내 준 친구에게 마음을 전해요{" "}
                </MonoText>

                <TextInput
                    style={styles.letter}
                    multiline={true}
                    numberOfLines={20}
                    placeholder="전하고 싶은 말을 적어주세요!"
                    onChangeText={(text) => {
                        setIsNotEmptyLetters(text.length > 0)
                        setValue("letters", text)
                    }}
                    maxLength={300}
                />
                <View style={styles.nickname_input}>
                    <MonoText style={styles.input_text}>받는 이</MonoText>
                    <MonoText>{senderNickname}</MonoText>
                    <View />
                </View>
            </View>
            <View style={styles.footer}>
                {/* 이미지 첨부 버튼 주석
        <Buttons
          is_width={true}
          url={"gingercard"}
          title="이미지 첨부"
          color="darkgray"
        />
        */}
                <MonoText>{'   '}</MonoText>
                <Buttons
                    url={"letterCompleted"}
                    title="보내기"
                    is_width={true}
                    color="green"
                    callback={handleSubmit(letterSubmit)}
                    is_disable={!isNotEmptyLetters}
                />
            </View>
            <ErrorModal
                height={300}
                visible={ErrorModalVisible}
                onClose={closeErrorModal}
                name={errorTitle}
                desc={errorMessage}
                buttonMessage={errorButtonMessage}
                url={`hotel/${id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#000",
    },
    mailbox_items: {
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
        justifyContent: 'space-between'
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


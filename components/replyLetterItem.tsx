import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import {
    LetterInnerContainer,
    LetterInnerInfoView,
    LetterInnerSendText,
    LetterInnerTextBox,
    LetterInnerTitieTextView,
    LetterInnerTitieView,
    LetterInnerUserText,
    LetterOuterContainer,
    LetterReplyButtonText,
    LetterReplyButtonView
} from "../style/letterItemStyled";
import { SvgImg } from "./svgImg";
import { useSetRecoilState } from "recoil";
import Buttons from "./buttons";
import { FlatList } from "react-native-gesture-handler";
const iconMore = require("../assets/icon/i_more_vert_grey.svg");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");

type Props = {
    from: string; contents: string;
    is_active: boolean;
    navigation: any;
};

const ReplyLetterItem = ({ replies }: any) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];
    console.log(replies)
    return (
        <>
            <FlatList
                data={replies}
                renderItem={({ item }) =>
                    <LetterOuterContainer b_color="#36363B">
                        <LetterInnerContainer b_color="#36363B">
                            <LetterInnerInfoView>
                                <LetterInnerTitieView border_color="#4A4A4E">
                                    {/* <TouchableOpacity onPress={() => toggleModal(item.id)}>
                                <SvgImg url={iconGlassesQuestionMark} width={30} height={30} />
                              </TouchableOpacity> */} {/*엿보기 기능이 추가되면 다시 활성화*/}
                                    <View />
                                    <LetterInnerTitieTextView>
                                        <LetterInnerSendText f_color="#77C7B9">보내는 이</LetterInnerSendText>
                                        <LetterInnerUserText f_color="#FFFDF0">로운로운</LetterInnerUserText>
                                    </LetterInnerTitieTextView>
                                    <View style={{ position: 'absolute', left: '98%' }}>
                                        <SvgImg
                                            url={iconMore}
                                            width={30}
                                            height={30} />
                                    </View>
                                    <View />
                                </LetterInnerTitieView>
                            </LetterInnerInfoView>
                            <LetterInnerTextBox f_color="#fff">
                                메리 크리스마스~~! 잘 지내고 계신가요. 바빠 보이시는데 기력두 잘 챙기면서
                                23년 마무리 같이 으쌰으쌰 해봅시다 앞으로도 잘부탁해용 테스트용 편지테스트용
                                편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용
                            </LetterInnerTextBox>
                            <TouchableOpacity style={{ alignItems: 'center', padding: 15 }}>
                                <LetterReplyButtonView>
                                    <Buttons
                                        title="답장 모아보기"
                                        color="green"
                                        width={247}
                                        url="replybox/1"
                                    />
                                </LetterReplyButtonView>
                            </TouchableOpacity>
                        </LetterInnerContainer>
                    </LetterOuterContainer>}
            />
        </>

    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 18,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 8,
        marginTop: 15,
        width: "100%",
    },
    bold: {
        fontWeight: "bold",
    },
    from_text: {
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    contents: {
        fontSize: 13,
        lineHeight: 17,
        marginTop: 10,
    },
    from_wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
    },
    icon: {
        width: 20,
        height: 20,
    },
});

export default ReplyLetterItem;

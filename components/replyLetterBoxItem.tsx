import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
} from "react-native";
import {
    LetterBlurText,
    LetterBlurTextView,
    LetterInnerContainer,
    LetterInnerInfoView,
    LetterInnerSendText,
    LetterInnerText,
    LetterInnerTextBox,
    LetterInnerTitieTextView,
    LetterInnerTitieView,
    LetterInnerUserText,
    LetterOuterContainer,
    LetterReplyButtonText,
    LetterReplyButtonView
} from "../style/letterItemStyled";
import { SvgImg } from "./svgImg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Buttons from "./buttons";
import { FlatList } from "react-native-gesture-handler";
import { BottemSheetBorderView } from "../style/bottemSheetStyled";
import { ReplyArrayProps } from "../api/interface";
import { letterTypeState, replyNameState, windowDateState } from "../atom/letterAtom";
const iconMore = require("../assets/icon/i_more_vert_grey.svg");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");
import BottemSheet from "./bottemSheet";
import FirstLetter from "./firstLetter";
import { MonoText } from "./styledText";
type Props = {
    from: string; contents: string;
    is_active: boolean;
    navigation: any;
};
const i_block = require("../assets/icon/i_block.svg");
const ReplyLetterBoxItem = (data: any) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const setSenderNickname = useSetRecoilState(replyNameState);
    const setLetterType = useSetRecoilState(letterTypeState);
    const [letterId, setLetterId] = useState(0);
    const [replyId, setReplyId] = useState(0);
    const windowDate = useRecoilValue(windowDateState);
    const toggleModal = (props: ReplyArrayProps) => {
        setLetterType(false);
        setBottomSheetVisible(true);
        setLetterId(data.letter.id);
        setReplyId(props.id)
        setBlocked(props.isBlocked);
        setSenderNickname(props.senderNickname);
    };

    const closeModal = () => {
        setBottomSheetVisible(false);
    };
    return (
        <ScrollView>
            <FirstLetter letter={data.letter} />
            <FlatList
                data={data.replies}
                renderItem={({ item }) => {
                    const date = new Date(item.date)
                    return (<LetterOuterContainer b_color={item.isMe ? ("#FFFDF0") : ("#36363B")}>
                        <LetterInnerContainer b_color={item.isMe ? ("#FFFDF0") : ("#36363B")}>
                            {!item.isMe ? (
                                item.isOpen ? (
                                    <LetterBlurTextView>
                                        <LetterBlurText>12일 {date.getDate().toString().replace(/^0/, '')} 일 창문을 열어야 확인할 수 있습니다!</LetterBlurText>
                                    </LetterBlurTextView>
                                ) : (null)
                            ) :
                                (null)
                            }
                            <LetterInnerInfoView blur={!item.isMe ? (!item.isOpen ? ('0') : ('3')) : (undefined)}>
                                <LetterInnerTitieView border_color="#4A4A4E">
                                    {/* <TouchableOpacity onPress={() => toggleModal(item.id)}>
                            <SvgImg url={iconGlassesQuestionMark} width={30} height={30} />
                          </TouchableOpacity> */} {/*엿보기 기능이 추가되면 다시 활성화*/}
                                    <View />
                                    <LetterInnerTitieTextView>
                                        <LetterInnerSendText f_color={item.isMe ? ("#4A4A4E") : ("#77C7B9")}>{item.isMe ? ("나의 편지") : ("보내는 이")}</LetterInnerSendText>
                                        <LetterInnerUserText f_color={item.isMe ? ("#25796B") : ("#FFFDF0")} >{item?.senderNickname}</LetterInnerUserText>
                                    </LetterInnerTitieTextView>
                                    {item.isMe ? (null) :
                                        (<View style={{ position: 'absolute', left: '98%', top: '14%' }}>
                                            <SvgImg
                                                url={iconMore}
                                                width={24}
                                                height={26}
                                                onPress={() => toggleModal(item)}
                                            />
                                        </View>)}
                                    {item.isBlocked ? (
                                        <SvgImg
                                            url={i_block}
                                            width={30}
                                            height={30}
                                        // onPress={() => toggleModal(item.id)}
                                        />
                                    ) : (<View />)}
                                </LetterInnerTitieView>
                                <LetterInnerTextBox>
                                    <LetterInnerText f_color={item.isMe ? ("#36363B") : ("#FFFDF0")} >
                                        {item?.content}
                                    </LetterInnerText>
                                </LetterInnerTextBox>
                            </LetterInnerInfoView>
                        </LetterInnerContainer>
                    </LetterOuterContainer>)
                }
                }
                keyExtractor={item => item.id.toString()}

            />

            <BottemSheet isVisible={bottomSheetVisible} onClose={closeModal} letterId={letterId} replyId={replyId} blocked={blocked} ></BottemSheet>
        </ScrollView>

    );
}

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

export default ReplyLetterBoxItem;

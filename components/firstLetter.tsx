import React, { useState } from 'react'
import {
    LetterInnerContainer,
    LetterInnerInfoView,
    LetterInnerSendText,
    LetterInnerTextBox,
    LetterInnerTitieTextView,
    LetterInnerTitieView,
    LetterInnerUserText,
    LetterOuterContainer
} from '../style/letterItemStyled'
import { View } from './themed'
import { SvgImg } from './svgImg'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { letterTypeState, replyNameState } from '../atom/letterAtom';
import { LetterArrayProps } from '../api/interface';
import { StyleSheet } from 'react-native';
import BottemSheet from "./bottemSheet";
const iconMore = require("../assets/icon/i_more_vert.svg");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");
const i_block = require("../assets/icon/i_block.svg");

function FirstLetter({ letter }: any) {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [letterId, setLetterId] = useState(0);
    const [blocked, setBlocked] = useState(false);
    const setSenderNickname = useSetRecoilState(replyNameState);
    const setLetterType = useSetRecoilState(letterTypeState);
    const toggleModal = (props: LetterArrayProps) => {
        setLetterType(true);
        setBottomSheetVisible(true);
        setLetterId(props.id);
        setBlocked(props.isBlocked);
        setSenderNickname(props.senderNickname);
    };

    const closeModal = () => {
        setBottomSheetVisible(false);
    };
    return (
        <View>
            <LetterOuterContainer b_color="#FFFDF0">
                <LetterInnerContainer b_color="#FFFDF0">
                    <LetterInnerInfoView>
                        <LetterInnerTitieView border_color="#4A4A4E">
                            {/* <TouchableOpacity onPress={() => toggleModal(item.id)}>
            <SvgImg url={iconGlassesQuestionMark} width={30} height={30} />
          </TouchableOpacity> */} {/*엿보기 기능이 추가되면 다시 활성화*/}
                            <View />
                            <LetterInnerTitieTextView>
                                <LetterInnerSendText f_color="#4A4A4E">나의 편지</LetterInnerSendText>
                                <LetterInnerUserText f_color="#25796B">{letter.senderNickname}</LetterInnerUserText>
                            </LetterInnerTitieTextView>

                            {letter.isBlocked ? (
                                <SvgImg
                                    url={i_block}
                                    width={30}
                                    height={30}
                                // onPress={() => toggleModal(letter.id)}
                                />
                            ) : (<View />)}
                        </LetterInnerTitieView>
                    </LetterInnerInfoView>
                    <LetterInnerTextBox f_color="#36363B">
                        {letter.content}
                    </LetterInnerTextBox>
                </LetterInnerContainer>
            </LetterOuterContainer>
            <BottemSheet isVisible={bottomSheetVisible} onClose={closeModal} letterId={letterId} blocked={blocked} ></BottemSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#000",
    },
    mailbox_items: {
        padding: 15,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 20,
    },
    title: {
        fontSize: 25,
        marginTop: 20,
    },
    letter_img: {
        width: 150,
        height: 40,
    },
    btn_wrapper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
    },
});

export default FirstLetter
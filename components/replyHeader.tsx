import React from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { MonoText } from "./styledText";
import { SvgImg } from "./svgImg";
import {
    MailBoxView,
    MailChoseContainer,
    MailChoseText,
    MailChoseView,
    MailInfoView,
    MailNumberText,
    MailTitleText,
    MailTitleView
} from "../style/mailBoxStyled";
import { useRecoilState, useSetRecoilState } from "recoil";
import { letterSwitchState, replyBoxSwitchState } from "../atom/letterAtom";

const arrow = require("../assets/icon/i_left_arrow.svg")
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");

const ReplyHeader = ({ marginTop, isTitle = true, navigation }: any) => {
    const setReplyGo = useSetRecoilState(replyBoxSwitchState)
    const replyGoBackHandler = () => {
        setReplyGo(false)
        // navigation.goBack()
    }
    return (
        <SafeAreaView style={{ width: "100%" }}>
            <MailBoxView>
                <SvgImg url={arrow} onPress={() => replyGoBackHandler()}></SvgImg>
                <MailTitleView>
                    <MailTitleText>답장 모아보기</MailTitleText>
                </MailTitleView>
                <TouchableOpacity >
                    <SvgImg url={iconGlassesQuestionMark} />
                </TouchableOpacity>
            </MailBoxView>
        </SafeAreaView>
    );
};

export default ReplyHeader;

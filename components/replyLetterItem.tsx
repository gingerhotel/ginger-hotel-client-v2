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
import { useRecoilState, useSetRecoilState } from "recoil";
import Buttons from "./buttons";
import { FlatList } from "react-native-gesture-handler";
import { BottemSheetBorderView } from "../style/bottemSheetStyled";
import { ReplyArrayProps } from "../api/interface";
import { letterTypeState, replyNameState } from "../atom/letterAtom";
const iconMore = require("../assets/icon/i_more_vert_grey.svg");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");
import BottemSheet from "./bottemSheet";
type Props = {
    from: string; contents: string;
    is_active: boolean;
    navigation: any;
};
const i_block = require("../assets/icon/i_block.svg");
const ReplyLetterItem = ({ replies }: any) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [letterId, setLetterId] = useState(0);
    const [replyId, setReplyId] = useState(0);
    const [blocked, setBlocked] = useState(false);
    const setSenderNickname = useSetRecoilState(replyNameState);
    const setLetterType = useSetRecoilState(letterTypeState);
    const toggleModal = (props: ReplyArrayProps) => {
        console.log(props)
        setLetterType(false);
        setBottomSheetVisible(true);
        setLetterId(props.letterId);
        setReplyId(props.id);
        setBlocked(props.isBlocked);
        setSenderNickname(props.senderNickname);
    };

    const closeModal = () => {
        setBottomSheetVisible(false);
    };
    return (
      <>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={replies}
          renderItem={({ item }) => (
            <LetterOuterContainer b_color="#36363B">
              <LetterInnerContainer b_color="#36363B">
                <LetterInnerInfoView>
                  <LetterInnerTitieView border_color="#4A4A4E">
                    <View />
                    <LetterInnerTitieTextView>
                      <LetterInnerSendText f_color="#77C7B9">
                        보내는 이
                      </LetterInnerSendText>
                      <LetterInnerUserText f_color="#FFFDF0">
                        {item?.senderNickname}
                      </LetterInnerUserText>
                    </LetterInnerTitieTextView>
                    <View style={{ position: "absolute", left: "108%" }}>
                      <SvgImg
                        url={iconMore}
                        width={30}
                        height={30}
                        onPress={() => toggleModal(item)}
                      />
                    </View>
                    {item.isBlocked ? (
                      <SvgImg
                        url={i_block}
                        width={30}
                        height={30}
                        // onPress={() => toggleModal(item.id)}
                      />
                    ) : (
                      <View />
                    )}
                  </LetterInnerTitieView>
                </LetterInnerInfoView>
                <LetterInnerTextBox f_color="#fff">
                  {item?.content}
                </LetterInnerTextBox>
              </LetterInnerContainer>
            </LetterOuterContainer>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <BottemSheet
          isVisible={bottomSheetVisible}
          replyId={replyId}
          onClose={closeModal}
          letterId={letterId}
          blocked={blocked}
        ></BottemSheet>
      </>
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

export default ReplyLetterItem;

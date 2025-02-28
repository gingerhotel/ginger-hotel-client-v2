import styled from "styled-components/native";

export const LetterOuterContainer = styled.View<{ b_color?: string }>`
  border-radius: 18px;
  border-width: 3px;
  border-color: #25796b;
  background-color: ${(props) => props.b_color};
  max-width: 384px;
  width: 100%;
  padding: 6px;
  margin-bottom: 15px;
`;

export const LetterInnerContainer = styled.View<{ b_color?: string }>`
  border-radius: 12px;
  border-width: 2.5px;
  border-color: #005142;
  background-color: ${(props) => props.b_color};
  border-style: dashed;
  max-width: 310px;
  justify-content: center;
`;

export const LetterInnerInfoView = styled.View<{ blur?: string | undefined }>`
  display: flex;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
  /* align-items: center; */
  justify-content: center;
  max-width: 290px;
  min-width: 290px;
  filter: blur(${(props) => props.blur}px);
  ${(props) => props.blur == '3' ? ('pointer-events:none') : ('')}
`;
export const LetterBlurTextView = styled.View`
  position: absolute;
  left: 0;
  top: 40%;
  right: 0;
  bottom: 0;
`
export const LetterBlurText = styled.Text`
  font-family: "NanumSquareNeo-Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  text-align: center;
  color:#FFFDF0;
`
export const LetterInnerTitieView = styled.View<{ border_color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${(props) => props.border_color};
  padding: 10px;
  min-width: 240px;
`;

export const LetterInnerTitieTextView = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const LetterInnerSendText = styled.Text<{ f_color?: string }>`
  color: ${(props) => props.f_color};
  font-family: "NanumSquareNeo-Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: 10px;
`;
export const LetterInnerUserText = styled.Text<{ f_color?: string }>`
  /* color: #25796B; */
  color: ${(props) => props.f_color};
  font-size: 16px;
  font-family: "SOYOMaple-Regular";
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
export const LetterInnerTextBox = styled.View`
  max-width: 300px;
  padding-top: 14px;
`;
export const LetterInnerText = styled.Text<{ f_color?: string }>`
  color: ${(porps) => porps.f_color};
  max-width: 300px;
  font-family: "NanumSquareNeo-Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const LetterReplyButtonView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 247px;
  height: 46px;
  background-color: #2f9c89;
  border-radius: 6px;
`;
export const LetterReplyButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

import styled from "styled-components/native";

export const LetterOuterContainer = styled.View`
    border-radius: 18px;
    border-width: 2px;
    border-color: #25796B;
    
    max-width:384px;
    max-width:384px;
    padding: 7px;
    margin-bottom: 15px;
`

// Styled component with linear gradient
export const LetterInnerContainer = styled.View<{ b_color?: string }>`
  border-radius: 12px;
  border-width: 4px;
  border-color: #005142;
  background-color: ${(props) => props.b_color};
  border-style: dotted;
  max-width:384px;
  max-width:384px;
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

export const LetterInnerTitieTextView = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`

export const LetterInnerSendText = styled.Text<{ f_color?: string }>`
  font-size: 12px;
  color: ${(props) => props.f_color};
`;
export const LetterInnerUserText = styled.Text<{ f_color?: string }>`
  /* color: #25796B; */
  color: ${(props) => props.f_color};
  font-size: 16px;
  font-weight: bold;
`;
export const LetterInnerTextBox = styled.Text<{ f_color?: string }>`
  padding: 20px;
  color: ${(porps) => porps.f_color};
`;
export const LetterReplyButtonView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 247px;
    height: 46px;
    background-color: #2F9C89;
    border-radius: 6px;
`
export const LetterReplyButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`
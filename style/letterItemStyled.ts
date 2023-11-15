import styled from "styled-components/native";

export const LetterOuterContainer = styled.View`
    border-radius: 18px;
    border-width: 2px;
    border-color: #25796B;
    width:100%;
    padding: 7px;
`

// Styled component with linear gradient
export const LetterInnerContainer = styled.View`
    border-radius: 12px;
    border-width: 4px;
    border-color: #005142;
    background-color: #FFFDF0;
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
    max-width: 322px;
    min-width: 322px;
    border-bottom-width: 1px;
    padding: 10px;
`

export const LetterInnerTitieTextView = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`

export const LetterInnerSendText = styled.Text`
    font-size: 12px;
`
export const LetterInnerUserText = styled.Text`
    color: #25796B;
    font-size: 16px;
    font-weight: bold;
`
export const LetterInnerTextBox = styled.Text`
    padding: 20px;
`

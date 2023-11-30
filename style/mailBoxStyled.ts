import styled from "styled-components/native";
const Font_18 = styled.Text`
    font-size: 18px;
`
const Font_16 = styled.Text`
    font-size: 16px;
`
export const MailBoxView = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 20px;
`
export const MailTitleView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`
export const MailTitleText = styled(Font_18)`
    color: white;
`

export const MailNumberText = styled(Font_18)`
    color: #34AB96;
`
export const MailChoseContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: #6E6E73;
    border-bottom-width: 1px;
    padding-left: 20px;
`
export const MailChoseView = styled.View<{ b_color: string }>`
    display: flex;
    flex-direction: row;
    gap: 3px;
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.b_color};
`
export const MailInfoView = styled.View`
    display: flex;
    flex-direction: row;
`
export const MailChoseText = styled(Font_16) <{ f_color: string }>`
    color: ${(props) => props.f_color};
    padding: 10px;
`
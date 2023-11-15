import { atom } from "recoil";
type letterSwitchType = {
    new: boolean,
    reply: boolean
}
export const letterSwitchState = atom<letterSwitchType>({
    key: 'letterSwitchState',
    default: {
        new: true,
        reply: false
    }
})
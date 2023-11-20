
import { atom } from "recoil";
interface letterSwitchType {
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
export const replyBoxSwitchState = atom<boolean>({
    key: 'replyBoxSwitchState',
    default: false
})
export const hotelIdState = atom<number>({
    key: 'hotelIdState',
    default: 0
})
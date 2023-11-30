
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
export const hotelIdState = atom<string | string[]>({
    key: 'hotelIdState',
    default: '0'
})
export const newLetterCountState = atom<number>({
    key: 'newLetterCount',
    default: 0
})
export const letterUpdateState = atom<boolean>({
    key: 'letterUpdateState',
    default: false
})
export const replyNameState = atom<string>({
    key: 'replyNameState',
    default: ''
})
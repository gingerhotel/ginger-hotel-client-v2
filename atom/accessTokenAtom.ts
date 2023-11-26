
import { atom, selector } from "recoil";

/*interface letterSwitchType {
    new: boolean,
    reply: boolean
}*/



export const accessTokenAtom = atom<string>({
    key: 'accessTokenAtom',
    default: undefined
})

export const isLoginSelector = selector({
    key: "isLoginSelector",
    get: ({get})=> !!get(tokenAtom),
})
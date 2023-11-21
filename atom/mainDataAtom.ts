import { atom } from "recoil";
import { HotelData } from "../Type/mainType";
import persistAtom from "./persistAtom";

export const MainDataState = atom<HotelData | undefined>({
  key: "MainDataState",
  default: {
    success: false,
    todayReceivedLetterCount: 0,
    feekCount: 0,
    keyCount: 0,
    hotel: {
      nickname: "",
      description: "",
      structColor: "",
      bodyColor: "",
    },
    hotelWindows: {},
    isLoginMember: false,
    isOwner: false,
    isFriend: false,
    isBlocked: false,
  },
  effects_UNSTABLE: [persistAtom],
});

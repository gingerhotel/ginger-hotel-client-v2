import { atom } from "recoil";

import { UserApiResponse } from "../Type/myType";
import persistAtom from "./persistAtom";

export const UserState = atom<UserApiResponse | undefined>({
  key: "UserState",
  default: {
    success: false,
    user: {
      nickname: "",
      code: "",
      membership: "",
      gender: null,
      birthDate: null,
      keyCount: 0,
      feekCount: 0,
    },
    hotel: {
      id: 0,
      nickname: "",
      description: "",
      structColor: "",
      bodyColor: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});

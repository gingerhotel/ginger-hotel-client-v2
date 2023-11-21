import AsyncStorage from "@react-native-async-storage/async-storage";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "persist",
  storage: AsyncStorage,
});

export default persistAtom;

import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/Colors";
import GingermanCard from "../components/gingermanCard";
import Header from "../components/appHeader";

const bellboy = require("../assets/gingerman/g_bellboy.png");

const GingerAlbum = () => {
  return (
    <>
      <Header title="진저맨 앨범" />
      <View style={styles.containter}>
        <ScrollView>
          <View style={styles.card_container}>
            <GingermanCard
              name="벨보이 진저맨"
              date="12/01"
              pngImage={bellboy}
              isOpened={true}
            />
            <GingermanCard date="12/02" isOpened={false} />
            <GingermanCard date="12/03" isOpened={false} />
            <GingermanCard date="12/04" isOpened={false} />
            <GingermanCard date="12/05" isOpened={false} />
            <GingermanCard date="12/06" isOpened={false} />
            <GingermanCard date="12/07" isOpened={false} />
            <GingermanCard date="12/08" isOpened={false} />
            <GingermanCard date="12/09" isOpened={false} />
            <GingermanCard date="12/10" isOpened={false} />
            <GingermanCard date="12/11" isOpened={false} />
            <GingermanCard date="12/12" isOpened={false} />
            <GingermanCard date="12/13" isOpened={false} />
            <GingermanCard date="12/14" isOpened={false} />
            <GingermanCard date="12/15" isOpened={false} />
            <GingermanCard date="12/16" isOpened={false} />
            <GingermanCard date="12/17" isOpened={false} />
            <GingermanCard date="12/18" isOpened={false} />
            <GingermanCard date="12/19" isOpened={false} />
            <GingermanCard date="12/20" isOpened={false} />
            <GingermanCard date="12/21" isOpened={false} />
            <GingermanCard date="12/22" isOpened={false} />
            <GingermanCard date="12/23" isOpened={false} />
            <GingermanCard date="12/24" isOpened={false} />
            <GingermanCard date="12/25" isOpened={false} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greyblack,
    paddingVertical: 33,
    flex: 1,
  },
  card_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 360,
  },
});

export default GingerAlbum;

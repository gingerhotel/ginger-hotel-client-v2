import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const unitID =
  Platform.select({
    ios: 'ca-app-pub-1488857453148392/2280069040',
    android: 'ca-app-pub-복사한ID',
  }) || '';

const adUnitId = __DEV__ ? TestIds.BANNER : unitID;

const Admob = () => {
  return (
    <View style={styles.admob}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  admob: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Admob;
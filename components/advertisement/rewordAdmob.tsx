import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import Buttons from '../buttons';


const adUnitId = __DEV__
  ? TestIds.REWARDED
  : '내 광고 ID';

const RewordAdmob = ({ navigation }: any) => {
  const [coin, setCoin] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const rewardedRef = useRef<RewardedAd | null>(null);

  useEffect(() => {
    // 광고 생성
    const rewarded = RewardedAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true, // 맞춤형 광고 여부
      //keywords: ['fashion', 'clothing'], // 광고 카테고리 고르기
    });
    //생성된 광고는 ref 변수로 관리
    rewardedRef.current = rewarded;

    // 광고 로드 이벤트 리스너
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );

    // 라워드를 받았을 때 이벤트 리스너
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        rewarded.removeAllListeners();
        setCoin(prev => prev + reward.amount);
      },
    );

    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  // 광고 열기
  const openAd = () => {
    if (rewardedRef.current !== null) {
      rewardedRef.current.show();
    }
  };  
  
  /*
  const showRewarded = async () => {
    const rewarded = RewardedAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: false
    });
    var loaded = false;
    var gotReward = false;
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if(type === RewardedAdEventType.LOADED) {
        rewarded.show();
        loaded = true;
      }
      else if(type === RewardedAdEventType.EARNED_REWARD) {
        gotReward = true;
      }
      else if(error) {
        console.warn(error);
      }
    }); 
    rewarded.load();
    while(!loaded) {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    }
    return gotReward;
  }*/

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Buttons
          navigation={navigation}
          is_width={true}
          title="이미지 첨부"
          color="darkgray"
          callback={openAd}
          is_disable={!loaded}
        />
      <Buttons
          navigation={navigation}
          is_width={true}
          title="이미지 첨부"
          color="darkgray"
        />
      <Text>coin : {coin}</Text>
    </View>
  );
};

export default RewordAdmob;
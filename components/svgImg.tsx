import React from "react";
import { Image, Platform, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";

type Props = {
  onPress?: any;
  url: string | any;
  a_width: number; // 앱 가로
  a_height?: number; // 앱 세로
  width: number;
  height?: number;
};

export function SvgImg({
  onPress,
  url,
  a_width,
  a_height,
  width,
  height,
}: Props) {
  return (
    <>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
        <TouchableOpacity onPress={onPress}>
          <WithLocalSvg width={a_width} height={a_height} asset={url} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Image source={url} style={{ width, height }} />
        </TouchableOpacity>
      )}
    </>
  );
}

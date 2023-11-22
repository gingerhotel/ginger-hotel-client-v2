import React from "react";
import { Image, Platform, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";

type Props = {
  onPress?: any;
  url: string | any;
  width?: number;
  height?: number;
  style?: any;
};

export function SvgImg(props: Props) {
  return (
    <>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
        typeof props.onPress === "function" ? (
          <TouchableOpacity onPress={props.onPress}>
            <WithLocalSvg
              style={props.style}
              asset={props.url}
              width={props.width}
              height={props.height}
            />
          </TouchableOpacity>
        ) : (
          <WithLocalSvg
            style={props.style}
            asset={props.url}
            width={props.width}
            height={props.height}
          />
        )
      ) : typeof props.onPress === "function" ? (
        <TouchableOpacity onPress={props.onPress}>
          <Image style={props.style} source={props.url} />
        </TouchableOpacity>
      ) : (
        <Image style={props.style} source={props.url} />
      )}
    </>
  );
}

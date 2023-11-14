import React, { useEffect, useState } from "react";

import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";

const Hotel1 = require("../assets/images/Hotel1.svg");
import { Image } from "react-native";
import { buttons_text, colors } from "../constants/Colors";
import { MonoText } from "../components/styledText";
import CreateHotelColorItem from "../components/createHotelColor";

export default function CreateHotel({ navigation }: any) {
  const [structColor, setStructColor] = useState("#F5C8B8");
  const [wallColor, setWallColor] = useState("#AF2010");
  const [activeTitle, setTitle] = useState("벽면");

  const wallColors = [
    "#CF332C",
    "#FD883F",
    "#FDB13F",
    "#C7DA82",
    "#63C5A0",
    "#65BBD0",
    "#254D81",
    "#8A61AC",
    "#FBDFC0",
    "#3D3D41",
  ];

  const titleList = ["벽면", "뼈대", "건물장식", "마당장식", "창문", "뒷배경"];

  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={1} />
      <View>
        <View style={styles.img_wrapper}>
          <Image
            source={Hotel1}
            style={{
              position: "relative",
              width: 371,
              height: 420,
              marginTop: 20,
              zIndex: 3,
            }}
          />
        </View>
        <View style={{ position: "absolute", top: 69, left: 43, zIndex: 1 }}>
          <svg
            width="310"
            height="365"
            viewBox="0 0 322 365"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="struct"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M224.479 1C224.479 0.447715 224.927 0 225.479 0H255.428C255.98 0 256.428 0.447715 256.428 1V6.65991C256.428 7.2122 255.98 7.65991 255.428 7.65991H250.099V39.842H284.685L321.613 93.1636V101.75H309.647L308.572 152.665V154.553H317.274C318.379 154.553 319.274 155.448 319.274 156.553V160.553C319.274 161.658 318.379 162.553 317.274 162.553H308.572V215.553H317.274C318.379 215.553 319.274 216.448 319.274 217.553V221.553C319.274 222.658 318.379 223.553 317.274 223.553H308.572V275.553H317.274C318.379 275.553 319.274 276.448 319.274 277.553V281.553C319.274 282.658 318.379 283.553 317.274 283.553H308.572V364.734H160.807V0.319092L184.887 24.3029V39.842H230.807V7.65991H225.479C224.927 7.65991 224.479 7.2122 224.479 6.65991V1ZM160.807 0.319092L136.727 24.3029V39.842H36.9279L0 93.1636V101.75H11.9663V152.665V154.553H5.53765C4.43308 154.553 3.53765 155.448 3.53765 156.553V160.553C3.53765 161.658 4.43308 162.553 5.53765 162.553H11.9663V215.553H5.53765C4.43308 215.553 3.53765 216.448 3.53765 217.553V221.553C3.53765 222.658 4.43308 223.553 5.53765 223.553H11.9663V275.553H5.53765C4.43308 275.553 3.53765 276.448 3.53765 277.553V281.553C3.53765 282.658 4.43308 283.553 5.53765 283.553H11.9663V364.734H160.807V0.319092Z"
              fill={structColor}
            />
          </svg>
        </View>
        <View style={{ position: "absolute", top: 69, left: 43, zIndex: 2 }}>
          <svg
            width="310"
            height="366"
            viewBox="0 0 322 366"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="wall"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M224.493 1.58862C224.493 1.03634 224.941 0.588623 225.493 0.588623H255.934C256.487 0.588623 256.934 1.03634 256.934 1.58862V7.24854C256.934 7.80082 256.487 8.24854 255.934 8.24854H250.508V41.1416H285.317L321.461 94.6416V102.142H308.89V155.142H317.287C318.392 155.142 319.287 156.037 319.287 157.142V161.142C319.287 162.246 318.392 163.142 317.287 163.142H308.89V216.142H317.287C318.392 216.142 319.287 217.037 319.287 218.142V222.142C319.287 223.246 318.392 224.142 317.287 224.142H308.89V276.142H317.287C318.392 276.142 319.287 277.037 319.287 278.142V282.142C319.287 283.246 318.392 284.142 317.287 284.142H308.89V365.642H301.6V365.142H198.47V347.642H193.45V332.642H183.41V336.642H160.82V250.142H181.402V214.567H140.236V250.142H160.818V336.642H138.228V332.642H128.188V347.642H123.168V365.142H17.7469V365.642H12.2248V284.142H5.54885C4.44428 284.142 3.54885 283.246 3.54885 282.142V278.142C3.54885 277.037 4.44428 276.142 5.54885 276.142H12.2248V224.142H5.54885C4.44428 224.142 3.54885 223.246 3.54885 222.142V218.142C3.54885 217.037 4.44428 216.142 5.54885 216.142H12.2248V163.142H5.54885C4.44428 163.142 3.54885 162.246 3.54885 161.142V157.142C3.54885 156.037 4.44428 155.142 5.54885 155.142H12.2248V102.142H0.176758V94.6416L36.321 41.1416H136.22V68.6416C144.252 63.8416 151.782 60.6416 160.818 60.6416V170.142H140.236V209.049H181.402V170.142H160.82V60.6416C169.856 60.6416 177.386 63.8416 185.418 68.6416V41.1416H230.919V8.24854H225.493C224.941 8.24854 224.493 7.80082 224.493 7.24854V1.58862ZM160.818 2.6416L132.706 30.1416L134.714 32.1416L160.818 6.1416V2.6416ZM17.7469 216.142V163.142H121.468L121.661 168.142L123.167 168.642V216.142H17.7469ZM125.175 152.642L121.159 155.142H17.7469V102.142H125.175V152.642ZM17.7469 224.142V276.142H121.552V254.142H118.147L115.135 250.142H123.167V224.142H17.7469ZM121.552 341.142H17.7469V284.142H121.552V341.142ZM159.314 257.141C159.314 256.589 158.866 256.14 158.314 256.156C152.384 256.331 146.857 258.057 142.156 260.928C141.703 261.204 141.563 261.793 141.828 262.253L147.565 272.222C147.84 272.701 148.451 272.863 148.942 272.609C151.602 271.23 154.716 270.307 158.314 270.162C158.866 270.139 159.314 269.694 159.314 269.141V257.141ZM131.263 273.999C130.803 273.733 130.63 273.154 130.885 272.688C132.814 269.161 135.428 266.038 138.556 263.48C139.01 263.109 139.683 263.231 139.996 263.728L146.003 273.259C146.289 273.712 146.165 274.309 145.737 274.631C144.045 275.906 142.597 277.355 141.381 278.845C141.063 279.235 140.51 279.347 140.074 279.095L131.263 273.999ZM130.524 275.976C130.005 275.69 129.351 275.917 129.14 276.471C127.989 279.501 127.314 282.753 127.203 286.142C127.185 286.694 127.634 287.141 128.186 287.141H136.04C136.478 287.141 136.863 286.856 137.01 286.443C137.48 285.127 138.196 283.578 139.175 281.967C139.479 281.467 139.318 280.808 138.805 280.527L130.524 275.976ZM128.184 289.141C127.632 289.141 127.185 289.589 127.185 290.141V294.141C127.185 294.694 127.632 295.141 128.184 295.141H137.229C137.781 295.141 138.229 294.694 138.229 294.141V290.141C138.229 289.589 137.781 289.141 137.229 289.141H128.184ZM127.185 297.141C127.185 296.589 127.632 296.141 128.184 296.141H137.229C137.781 296.141 138.229 296.589 138.229 297.141V303.141C138.229 303.694 137.781 304.141 137.229 304.141H128.184C127.632 304.141 127.185 303.694 127.185 303.141V297.141ZM128.184 305.141C127.632 305.141 127.185 305.589 127.185 306.141V312.141C127.185 312.694 127.632 313.141 128.184 313.141H137.229C137.781 313.141 138.229 312.694 138.229 312.141V306.141C138.229 305.589 137.781 305.141 137.229 305.141H128.184ZM127.185 315.141C127.185 314.589 127.632 314.141 128.184 314.141H137.229C137.781 314.141 138.229 314.589 138.229 315.141V321.141C138.229 321.694 137.781 322.141 137.229 322.141H128.184C127.632 322.141 127.185 321.694 127.185 321.141V315.141ZM127.185 324.141C127.185 323.589 127.632 323.141 128.184 323.141H137.229C137.781 323.141 138.229 323.589 138.229 324.141V330.141C138.229 330.694 137.781 331.141 137.229 331.141H128.184C127.632 331.141 127.185 330.694 127.185 330.141V324.141ZM188.932 30.1416L160.82 2.6416V6.1416L186.924 32.1416L188.932 30.1416ZM301.6 216.142V163.142H200.169L199.976 168.142L198.47 168.642V216.142H301.6ZM196.462 152.642L200.478 155.142H301.6V102.142H196.462V152.642ZM301.6 224.142H198.47V250.142H206.502L203.49 254.142H198.972V276.142H301.6V224.142ZM301.6 341.142H198.972V284.142H301.6V341.142ZM161.946 257.141C161.946 256.589 162.394 256.14 162.946 256.158C168.536 256.34 173.745 258.047 178.178 260.88C178.612 261.158 178.746 261.726 178.498 262.177L173.092 272.011C172.818 272.509 172.186 272.677 171.685 272.408C169.199 271.072 166.295 270.177 162.947 270.027C162.395 270.002 161.946 269.557 161.946 269.005V257.141ZM188.482 273.873C188.935 273.611 189.111 273.044 188.87 272.579C187.055 269.092 184.596 266 181.652 263.466C181.194 263.072 180.497 263.198 180.185 263.716L174.53 273.108C174.262 273.553 174.381 274.127 174.789 274.449C176.331 275.665 177.659 277.041 178.783 278.459C179.099 278.858 179.659 278.976 180.1 278.721L188.482 273.873ZM189.15 275.895C189.677 275.606 190.339 275.842 190.541 276.408C191.599 279.367 192.22 282.537 192.325 285.839C192.343 286.391 191.893 286.839 191.341 286.839H184.014C183.572 286.839 183.184 286.547 183.041 286.128C182.587 284.804 181.894 283.243 180.945 281.622C180.653 281.123 180.817 280.475 181.323 280.196L189.15 275.895ZM192.73 289.141C193.282 289.141 193.73 289.589 193.73 290.141V294.141C193.73 294.694 193.282 295.141 192.73 295.141H183.686C183.134 295.141 182.686 294.694 182.686 294.141V290.141C182.686 289.589 183.134 289.141 183.686 289.141H192.73ZM193.73 297.141C193.73 296.589 193.282 296.141 192.73 296.141H183.686C183.134 296.141 182.686 296.589 182.686 297.141V303.141C182.686 303.694 183.134 304.141 183.686 304.141H192.73C193.282 304.141 193.73 303.694 193.73 303.141V297.141ZM192.73 305.141C193.282 305.141 193.73 305.589 193.73 306.141V312.141C193.73 312.694 193.282 313.141 192.73 313.141H183.686C183.134 313.141 182.686 312.694 182.686 312.141V306.141C182.686 305.589 183.134 305.141 183.686 305.141H192.73ZM193.73 315.141C193.73 314.589 193.282 314.141 192.73 314.141H183.686C183.134 314.141 182.686 314.589 182.686 315.141V321.141C182.686 321.694 183.134 322.141 183.686 322.141H192.73C193.282 322.141 193.73 321.694 193.73 321.141V315.141ZM193.73 324.141C193.73 323.589 193.282 323.141 192.73 323.141H183.686C183.134 323.141 182.686 323.589 182.686 324.141V330.141C182.686 330.694 183.134 331.141 183.686 331.141H192.73C193.282 331.141 193.73 330.694 193.73 330.141V324.141Z"
              fill={wallColor}
            />
          </svg>
        </View>
      </View>

      <View style={styles.deco_wrapper}>
        <View style={styles.title_wrapper}>
          {titleList?.map((title) => (
            <TouchableOpacity key={title} onPress={() => setTitle(title)}>
              <MonoText
                style={[
                  styles.title,
                  title === activeTitle && styles.title_active,
                ]}
              >
                {title}
              </MonoText>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.color_wrapper}>
          {(activeTitle === "벽면" || activeTitle === "뼈대") &&
            wallColors?.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  activeTitle === "벽면"
                    ? setStructColor(color)
                    : setWallColor(color)
                }
              >
                <CreateHotelColorItem
                  key={index}
                  color={color}
                  index={index}
                  active={activeTitle === "벽면" ? structColor : wallColor}
                ></CreateHotelColorItem>
              </TouchableOpacity>
            ))}
        </View>
      </View>

      <View style={styles.btn_wrapper}>
        <Buttons
          navigation={navigation}
          url={"hotelname"}
          props={{ structColor, bodyColor: wallColor }}
          title="다음으로"
          color="green"
        />
        <MonoText style={styles.hotel_info}>
          ※호텔 색상은 나중에도 수정할 수 있어요!
        </MonoText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(30,31,35,1.00)",
    flex: 1,
    justifyContent: "flex-start",
  },
  img_wrapper: {
    borderWidth: 0.3,
    borderColor: colors.grey500,
    zIndex: 3,
    marginTop: 26,
    padding: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    color: buttons_text.gray,
  },
  title_active: {
    color: buttons_text.green,
    borderBottomColor: buttons_text.green,
    borderBottomWidth: 1,
  },
  btn_wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 90,
    position: "absolute",
    bottom: 30,
    left: 0,
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  deco_wrapper: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
  title_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  color_wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  hotel_info: {
    color: colors.grey500,
    fontSize: 10,
  },
});

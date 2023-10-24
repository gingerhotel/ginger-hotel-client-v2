import React from "react";
import { BaseToast } from "react-native-toast-message";

export const toastConfig = {
  basicToast: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: "#5A66FF",
        borderLeftColor: "#5A66FF",
        height: "40px",
        textAlign: "center",
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "white",
        textAlign: "center",
      }}
    />
  ),
};

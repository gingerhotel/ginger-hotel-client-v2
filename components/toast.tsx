import React from "react";
import { BaseToast } from "react-native-toast-message";

export const toastConfig = {
  basicToast: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: "#5A66FF",
        borderLeftColor: "#5A66FF",
        textAlign: "center",
        padding: 2,
        height: 40,
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

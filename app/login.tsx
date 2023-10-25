import React from "react";
import {
  StyleSheet,
  Image,
  Button,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import Buttons from "../components/buttons";
import LetterHeader from "../components/letterHeader";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'


export default function Login({ navigation }: any) {
  let clientId ='983622613978-aj2js3e1qb9qq1jtdueu7ic47o8fgg2l.apps.googleusercontent.com';
  return (
    <View style={styles.container}>
      <LetterHeader marginTop={100} isTitle={false} />
      <ScrollView>
        <View style={styles.mailbox_items}>
          <TextInput
            style={styles.input}
            placeholder="pw"
          />
          <Buttons navigation={navigation} url={"completed"} title="카카오 로그인" color="white"/>
          <Buttons navigation={navigation} url={"completed"} title="네이버 로그인" color="green"/>
          <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}  
                />
                {/* // Todo: Google Custom Design 
                    link : https://velog.io/@miyoni/google-social-login
                */}
            </GoogleOAuthProvider>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    height: "100%",
  },
  mailbox_items: {
    backgroundColor: "#D9D9D9",
    padding: 15,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  letter: {
    width: 300,
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
  },
  input: {
    width: 300,
    backgroundColor: "white",
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

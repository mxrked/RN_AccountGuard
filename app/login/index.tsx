import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  BackHandler,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";

import Global_Styles from "../../assets/styles/Global/Global_Styles";
import Login_Screen_Styles from "../../assets/styles/Screens/Login_Screen_Styles";

import SettingsModal from "../../assets/components/Global/SettingsModal";
import TopButtons from "../../assets/components/Global/TopButtons";
import LogoWithText from "@/assets/components/Global/LogoWithText";
import InputType from "../../assets/components/Forms/InputType";
import CustomButton from "@/assets/components/Global/CustomButton";

export default function Login() {
  const router = useRouter();

  const [settingsOpened, setSettingsOpened] = useState(false);
  const [customFonts] = useFonts({
    QuicksandBold: require("../../assets/fonts/quicksand/Quicksand-Bold.ttf"),
  });
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const exitApp = () => {
    BackHandler.exitApp();
  };

  const openSettings = () => {
    setSettingsOpened(true);
  };
  const closeSettings = () => {
    setSettingsOpened(false);
  };

  const clearLogin = () => {
    setLoginUserEmail("");
    setLoginPassword("");
  };

  const loginUser = async () => {
    try {
    } catch (error) {}
  };

  return (
    <ImageBackground
      source={require("../../assets/imgs/bgs/dark-orange-minimal.webp")}
      style={[Global_Styles.imageBG]}
    >
      {/** TOP BUTTONS */}
      <TopButtons openSettings={openSettings} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior="padding"
        style={[Login_Screen_Styles.loginScreenMainView]}
      >
        {/** SETTINGS MODAL */}
        <SettingsModal
          settingsOpened={settingsOpened}
          closeSettings={closeSettings}
        />

        <LogoWithText text="LOGIN TO YOUR AG PROFILE" />

        <View style={[Login_Screen_Styles.loginFormView]}>
          <InputType
            type=""
            value={loginUserEmail}
            onChangeText={setLoginUserEmail}
            placeholder={"Username/Email"}
            id="loginUserEmail"
          />
          <InputType
            type="password"
            value={loginPassword}
            onChangeText={setLoginPassword}
            placeholder={"Password"}
            id="loginPassword"
          />

          <View style={[Login_Screen_Styles.loginFormButtonsView]}>
            <CustomButton
              text="LOGIN"
              onPressFunc={loginUser}
              customStyle={{ marginRight: 20 }}
            />
            <CustomButton
              text="CLEAR"
              onPressFunc={clearLogin}
              customStyle={{}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

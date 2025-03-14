import React, { useState, useEffect } from "react";
import {
  Text,
  View,
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

export default function Login() {
  const router = useRouter();

  const [settingsOpened, setSettingsOpened] = useState(false);
  const [customFonts] = useFonts({
    QuicksandBold: require("../../assets/fonts/quicksand/Quicksand-Bold.ttf"),
  });

  const exitApp = () => {
    BackHandler.exitApp();
  };

  const openSettings = () => {
    setSettingsOpened(true);
  };
  const closeSettings = () => {
    setSettingsOpened(false);
  };

  return (
    <ImageBackground
      source={require("../../assets/imgs/bgs/dark-orange-minimal.webp")}
      style={[Global_Styles.imageBG]}
    >
      {/** TOP BUTTONS */}
      <TopButtons openSettings={openSettings} />
      <View style={[Login_Screen_Styles.logoScreenMainView]}>
        {/** SETTINGS MODAL */}
        <SettingsModal
          settingsOpened={settingsOpened}
          closeSettings={closeSettings}
        />

        <LogoWithText text="LOGIN TO YOUR AG PROFILE" />
      </View>
    </ImageBackground>
  );
}

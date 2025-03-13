import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  BackHandler,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";

import Global_Styles from "../../assets/styles/Global/Global_Styles";
import Login_Screen_Styles from "../../assets/styles/Screens/Login_Screen_Styles";

import SettingsModal from "../../assets/components/Global/SettingsModal";
import TopButtons from "../../assets/components/Global/TopButtons";

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
      source={require("../../assets/imgs/bgs/light-orange-minimal.webp")}
      style={[Global_Styles.imageBG]}
    >
      <View style={[Login_Screen_Styles.darkenOverlay]}>
        {/** TOP BUTTONS */}
        <TopButtons openSettings={openSettings} />

        {/** SETTINGS MODAL */}
        <SettingsModal
          settingsOpened={settingsOpened}
          closeSettings={closeSettings}
        />
      </View>
    </ImageBackground>
  );
}

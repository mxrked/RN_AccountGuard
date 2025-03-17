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

import Global_Styles from "../assets/styles/Global/Global_Styles";
import Start_Screen_Styles from "../assets/styles/Screens/Start_Screen_Styles";

import SettingsModal from "../assets/components/Global/SettingsModal";
import TopButtons from "../assets/components/Global/TopButtons";
import CreatedByText from "../assets/components/Global/CreatedByText";
import LogoWithText from "../assets/components/Global/LogoWithText";
import CustomButton from "../assets/components/Global/CustomButton";

export default function Index() {
  const router = useRouter();

  const [settingsOpened, setSettingsOpened] = useState(false);
  const [customFonts] = useFonts({
    QuicksandBold: require("../assets/fonts/quicksand/Quicksand-Bold.ttf"),
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

  const goToLogin = () => {
    router.push("/login");
  };
  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <ImageBackground
      source={require("../assets/imgs/bgs/light-orange-minimal.webp")}
      style={[Global_Styles.imageBG]}
    >
      {/** TOP BUTTONS */}
      <TopButtons openSettings={openSettings} />

      {/** SETTINGS MODAL */}
      <SettingsModal
        settingsOpened={settingsOpened}
        closeSettings={closeSettings}
      />

      {/** MAIN WINDOW VIEW */}
      <View
        style={[
          Global_Styles.mainWindowView,
          Start_Screen_Styles.startScreenMV,
        ]}
      >
        <LogoWithText text="PERSONAL ACCOUNT MANAGER" />

        <View style={[Start_Screen_Styles.startScreenButtonsView]}>
          <CustomButton text="LOGIN" onPressFunc={goToLogin} customStyle={{}} />
          <CustomButton
            text="REGISTER"
            onPressFunc={goToRegister}
            customStyle={{}}
          />

          <TouchableOpacity
            onPress={() => {
              exitApp();
            }}
          >
            <View
              style={[
                Global_Styles.globalButton,
                Start_Screen_Styles.exitButtonView,
              ]}
            >
              <Text
                // href="/register"
                style={[
                  {
                    fontFamily: "QuicksandBold",
                    fontWeight: "bold",
                    textAlignVertical: "center",
                    paddingLeft: 12,
                    paddingRight: 12,
                    color: "black",
                    fontSize: 15,
                  },
                ]}
              >
                EXIT
                {/* <Text style={{ textAlign: "center" }}>REGISTER</Text> */}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <CreatedByText />
      </View>
    </ImageBackground>
  );
}

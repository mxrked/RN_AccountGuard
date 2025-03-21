import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  // Check if the user is logged in
  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (loggedIn === "true") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkLoggedIn();
  }, []); // Re-run effect on mount

  // Re-check login status after logout
  const handleLogout = async () => {
    await AsyncStorage.setItem("isLoggedIn", "false"); // Clear login status from AsyncStorage
    await AsyncStorage.removeItem("username");
    setIsLoggedIn(false); // Update state to reflect logout
  };

  const goToLogin = () => {
    router.push("/login");
  };
  const goToRegister = () => {
    router.push("/register");
  };
  const goToProfile = () => {
    router.push("/profile");
  };

  // Add back handler for swipe-back gesture and hardware back button press
  useEffect(() => {
    const backAction = () => {
      // Close the app if on Start Screen (prevent swipe-back)
      exitApp();
      return true; // Prevent default behavior of the back button
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up the event listener on unmount
    return () => {
      backHandler.remove();
    };
  }, []);

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
        handleLogout={handleLogout}
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
          <CustomButton
            text={isLoggedIn ? "VIEW PROFILE" : "LOGIN"} // Change text based on login status
            onPressFunc={isLoggedIn ? goToProfile : goToLogin} // Navigate based on login status
            customStyle={{}}
          />
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

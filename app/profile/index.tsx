import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  BackHandler,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { getAuth } from "firebase/auth"; // Firebase authentication

import Global_Styles from "../../assets/styles/Global/Global_Styles";
import Profile_Screen_Styles from "../../assets/styles/Screens/Profile_Screen_Styles";

import SettingsModal from "../../assets/components/Global/SettingsModal";
import TopButtons from "../../assets/components/Global/TopButtons";
import LogoWithText from "@/assets/components/Global/LogoWithText";
import InputType from "../../assets/components/Forms/InputType";
import CustomButton from "@/assets/components/Global/CustomButton";

export default function Profile() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [username, setUsername] = useState("Guest");

  // Getting the username
  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      console.log("Retrieved username from AsyncStorage:", storedUsername); // Debugging line

      if (storedUsername) {
        setUsername(storedUsername); // Update the state if username exists
      } else {
        console.log("No username found in AsyncStorage.");
      }
    };

    fetchUsername();
  }, []); // Empty dependency array ensures it runs only once on mount

  const openSettings = () => {
    setSettingsOpened(true);
  };
  const closeSettings = () => {
    setSettingsOpened(false);
  };

  // Re-check login status after logout
  const handleLogout = async () => {
    await AsyncStorage.setItem("isLoggedIn", "false"); // Clear login status from AsyncStorage
    await AsyncStorage.removeItem("username"); // Remove username
    setUsername("Guest"); // Reset username to Guest after logout
    router.push("/"); // Redirect to login page
  };

  return (
    <ImageBackground
      source={require("../../assets/imgs/bgs/dark-orange-minimal.webp")}
      style={[Global_Styles.imageBG]}
    >
      {/* TOP BUTTONS */}
      <TopButtons openSettings={openSettings} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior="padding"
        style={[Profile_Screen_Styles.profileScreenMainView]}
      >
        {/* SETTINGS MODAL */}
        <SettingsModal
          settingsOpened={settingsOpened}
          closeSettings={closeSettings}
          handleLogout={handleLogout}
        />

        <LogoWithText text={`Welcome, ${username}`} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

import Global_Styles from "../../assets/styles/Global/Global_Styles";
import Forgot_Password_Screen_Styles from "../../assets/styles/Screens/Forgot_Password_Screen_Styles";

import ScreenHeader from "../../assets/components/Global/ScreenHeader";

export default function ForgotPassword() {
  const router = useRouter();

  const [customFonts] = useFonts({
    PoppinsBold: require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
  });

  // States

  // Functions
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  // Async Functions

  return (
    <ImageBackground
      source={require("../../assets/imgs/bgs/orange-bg.webp")}
      style={Global_Styles.imageBg}
    >
      {/** Makes the app scrollable */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ScreenHeader
          text="Forgot Password"
          prevPage={"/"}
          headerColor={"rgb(151, 88, 37)"}
        />
      </ScrollView>
    </ImageBackground>
  );
}

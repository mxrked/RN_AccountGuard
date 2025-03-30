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

import Global_Styles from "../assets/styles/Global/Global_Styles";
import Start_Screen_Styles from "../assets/styles/Screens/Start_Screen_Styles";

import Logo from "../assets/components/Global/Logo";
import CustomInput from "../assets/components/Global/CustomInput";
import CustomButton from "../assets/components/Global/CustomButton";
import CustomLink from "../assets/components/Global/CustomLink";
import SocialMediaButton from "../assets/components/Global/SocialMediaButton";
import CreatedByText from "../assets/components/Global/CreatedByText";

import {
  FacebookIcon,
  WebsiteIcon,
  InstagramIcon,
} from "../assets/components/Global/VectorIcons";

export default function Index() {
  const router = useRouter();

  const [customFonts] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
  });

  // States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Functions
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };
  const clearLogin = () => {
    setLoginEmail("");
    setLoginPassword("");
  };

  // Async Functions
  const loginUser = async () => {};

  return (
    <ImageBackground
      source={require("../assets/imgs/bgs/blue-bg.webp")}
      style={Global_Styles.imageBg}
    >
      {/** Makes the app scrollable */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={Start_Screen_Styles.startScreen_MainView}>
          <Logo />

          <View style={Start_Screen_Styles.startScreen_LoginFormView}>
            <CustomInput
              type="email"
              id="loginEmail"
              value={loginEmail}
              onChangeText={setLoginEmail}
              placeholder={"Email Address"}
            />
            <CustomInput
              type="password"
              id="loginPassword"
              value={loginPassword}
              onChangeText={setLoginPassword}
              placeholder={"Password"}
            />

            <CustomButton
              text="LOGIN"
              onPressFunc={loginUser} // Call loginUser function on press
              customStyle={{ marginTop: 50, marginBottom: 40 }}
            />

            <CustomLink
              link="/Register_Screen"
              text="Create A Profile?"
              customStyle={{ marginBottom: 10 }}
            />
            <CustomLink
              link="/Forgot_Password_Screen"
              text="Forgot Password?"
              customStyle={{ marginBottom: 10 }}
            />

            <View style={Start_Screen_Styles.startScreen_SocialMediaView}>
              <SocialMediaButton
                icon={FacebookIcon}
                customStyle={{}}
                link="https://www.facebook.com/profile.php?id=61559945193474"
              />
              <SocialMediaButton
                icon={InstagramIcon}
                customStyle={{}}
                link="https://www.instagram.com/dynamicwebtech/"
              />
              <SocialMediaButton
                icon={WebsiteIcon}
                customStyle={{}}
                link="https://dynamicwebtechnologies.com/"
              />
            </View>

            <CreatedByText />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

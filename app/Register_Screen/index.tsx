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
import Register_Screen_Styles from "../../assets/styles/Screens/Register_Screen_Styles";

import ScreenHeader from "../../assets/components/Global/ScreenHeader";
import CustomInput from "@/assets/components/Global/CustomInput";
import CustomButton from "@/assets/components/Global/CustomButton";

export default function Register() {
  const router = useRouter();

  const [customFonts] = useFonts({
    PoppinsBold: require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
  });

  // States
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  // Functions
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  // Async Functions
  const registerUser = async () => {};

  return (
    <ImageBackground
      source={require("../../assets/imgs/bgs/green-bg.webp")}
      style={Global_Styles.imageBg}
    >
      {/** Makes the app scrollable */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ScreenHeader
          text="Register"
          prevPage={"/"}
          headerColor={"rgb(37, 143, 40)"}
        />

        <View style={Register_Screen_Styles.registerMainView}>
          <Text
            style={{
              color: "white",
              wordWrap: "break-word",
              maxWidth: 320,
              textAlign: "center",
              fontFamily: "PoppinsMedium",
              fontSize: RFValue(14),
              marginBottom: 40,
            }}
          >
            Please enter the required information to register your profile.
          </Text>

          <View style={Register_Screen_Styles.registerFormView}>
            <CustomInput
              type="username"
              placeholder="Enter a username"
              id="registerUsername"
              value={registerUsername}
              onChangeText={setRegisterUsername}
            />
            <CustomInput
              type="email"
              placeholder="Enter a email address"
              id="registerEmail"
              value={registerEmail}
              onChangeText={setRegisterEmail}
            />
            <CustomInput
              type="password"
              placeholder="Enter a password"
              id="registerPassword"
              value={registerPassword}
              onChangeText={setRegisterPassword}
            />
            <CustomInput
              type="password"
              placeholder="Confirm password"
              id="registerConfirmPassword"
              value={registerConfirmPassword}
              onChangeText={setRegisterConfirmPassword}
            />

            <CustomButton
              text="REGISTER"
              onPressFunc={registerUser} // Call loginUser function on press
              customStyle={{ marginTop: 50, marginBottom: 40 }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

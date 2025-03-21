import React, { useState, useEffect } from "react";
import { auth, firestore } from "../../firebase"; // Correct import
import { createUserWithEmailAndPassword } from "firebase/auth"; // Modular auth method
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; // Modular Firestore method
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
  Alert,
  BackHandler,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

import Global_Styles from "../../assets/styles/Global/Global_Styles";
import Register_Screen_Styles from "../../assets/styles/Screens/Register_Screen_Styles";

import SettingsModal from "../../assets/components/Global/SettingsModal";
import TopButtons from "../../assets/components/Global/TopButtons";
import LogoWithText from "@/assets/components/Global/LogoWithText";
import InputType from "../../assets/components/Forms/InputType";
import CustomButton from "@/assets/components/Global/CustomButton";

export default function Register() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const [customFonts] = useFonts({
    QuicksandBold: require("../../assets/fonts/quicksand/Quicksand-Bold.ttf"),
  });

  const openSettings = () => {
    setSettingsOpened(true);
  };
  const closeSettings = () => {
    setSettingsOpened(false);
  };
  const clearRegister = () => {
    setRegisterEmail("");
    setRegisterUsername("");
    setRegisterPassword("");
    setRegisterConfirmPassword("");
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem("isLoggedIn", "false"); // Clear login status from AsyncStorage
    await AsyncStorage.removeItem("username");
    setIsLoggedIn(false); // Update state to reflect logout
  };

  const registerUser = async () => {
    if (registerPassword !== registerConfirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    try {
      // Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const user = userCredential.user;

      // Save user data to Firestore using their UID as the document ID
      const userDocRef = doc(firestore, "users", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: registerEmail,
        username: registerUsername,
      });

      // Success
      Alert.alert("User registered successfully!");
      router.push("/"); // Redirect to start page
    } catch (error) {
      console.error("Error registering user: ", error);
      Alert.alert("Error registering user", error.message);
    }
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
        style={[Register_Screen_Styles.registerScreenMainView]}
      >
        {/** SETTINGS MODAL */}
        <SettingsModal
          settingsOpened={settingsOpened}
          closeSettings={closeSettings}
          handleLogout={handleLogout}
        />

        <LogoWithText text="CREATE YOUR AG PROFILE" />

        <View style={[Register_Screen_Styles.registerFormView]}>
          <InputType
            type=""
            value={registerEmail}
            onChangeText={setRegisterEmail}
            placeholder={"Email Address"}
            id="registerEmail"
          />

          <InputType
            type=""
            value={registerUsername}
            onChangeText={setRegisterUsername}
            placeholder={"Username"}
            id="registerUsername"
          />

          <InputType
            type="password"
            value={registerPassword}
            onChangeText={setRegisterPassword}
            placeholder={"Password"}
            id="registerPassword"
          />

          <InputType
            type="password"
            value={registerConfirmPassword}
            onChangeText={setRegisterConfirmPassword}
            placeholder={"Confirm Password"}
            id="registerConfirmPassword"
          />

          <View style={[Register_Screen_Styles.registerFormButtonsView]}>
            <CustomButton
              text="REGISTER"
              onPressFunc={registerUser}
              customStyle={{ marginRight: 20 }}
            />
            <CustomButton
              text="CLEAR"
              onPressFunc={clearRegister}
              customStyle={{}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

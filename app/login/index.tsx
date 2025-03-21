import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  BackHandler,
} from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth functions
import { firestore } from "../../firebase"; // Import Firestore from firebase.js
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore"; // Import Firestore methods
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

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
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [customFonts] = useFonts({
    QuicksandBold: require("../../assets/fonts/quicksand/Quicksand-Bold.ttf"),
  });

  // Simple email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };
  const exitApp = () => {
    BackHandler.exitApp(); // Exit the app when triggered
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
    if (!loginUserEmail || !loginPassword) {
      alert("Please enter both username/email and password.");
      return;
    }

    const auth = getAuth();

    try {
      let emailToLogin = loginUserEmail;

      // If it's a username (no "@" in the input), query Firestore to find the associated email
      if (!loginUserEmail.includes("@")) {
        const userRef = collection(firestore, "users");
        const q = query(userRef, where("username", "==", loginUserEmail));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          alert("Username not found.");
          return;
        } else {
          emailToLogin = querySnapshot.docs[0].data().email;
          console.log(
            `Found email for username ${loginUserEmail}: ${emailToLogin}`
          );
        }
      }

      if (!validateEmail(emailToLogin)) {
        alert("The email format is invalid.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailToLogin,
        loginPassword
      );
      const user = userCredential.user;

      const userDocRef = doc(firestore, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const fetchedUsername = userDocSnap.data().username;
        console.log("Fetched username from Firestore: ", fetchedUsername);

        if (fetchedUsername) {
          // Save username to AsyncStorage
          await AsyncStorage.setItem("username", fetchedUsername);
          console.log("Username saved to AsyncStorage: ", fetchedUsername);

          // Ensure AsyncStorage is actually storing it
          const storedUsername = await AsyncStorage.getItem("username");
          console.log(
            "Username after saving to AsyncStorage: ",
            storedUsername
          ); // This will show the stored username
        } else {
          console.log("No username found in Firestore for this user.");
        }
      } else {
        console.log("No document found for the user.");
      }

      console.log("User signed in successfully", user);
      alert("Login successful!");
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.push("/profile");
    } catch (error) {
      console.error("Error logging in user: ", error);
      alert("Login failed. Please check your credentials and try again.");
    }
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
        style={[Login_Screen_Styles.loginScreenMainView]}
      >
        {/* SETTINGS MODAL */}
        <SettingsModal
          settingsOpened={settingsOpened}
          closeSettings={closeSettings}
        />

        <LogoWithText text="LOGIN TO YOUR AG PROFILE" />

        <View style={[Login_Screen_Styles.loginFormView]}>
          <InputType
            type="email"
            value={loginUserEmail}
            onChangeText={setLoginUserEmail}
            placeholder={"Email Address"}
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
              onPressFunc={loginUser} // Call loginUser function on press
              customStyle={{ marginRight: 20 }}
            />
            <CustomButton
              text="CLEAR"
              onPressFunc={clearLogin} // Clear input fields
              customStyle={{}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

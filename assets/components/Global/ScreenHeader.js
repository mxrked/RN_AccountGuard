import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { View, Text, TouchableOpacity } from "react-native";

import checkLoginStatus from "../../functions/asyncs/checkLoginStatus";
import logoutUser from "../../functions/asyncs/logoutUser";
import setTestLogin from "../../functions/asyncs/setTestLogin";

import Screen_Header_Styles from "../../styles/Components/Screen_Header_Styles";

const ScreenHeader = ({ text, prevPage, headerColor }) => {
  const router = useRouter();

  // States
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // Checking if the user is loggedIn
  useEffect(() => {
    //setTestLogin();

    const getLoginStatus = async () => {
      const status = await checkLoginStatus();
      setIsLoggedIn(status);
    };

    getLoginStatus();
  }, []);

  // Functions

  const finalizeLogout = async () => {
    const canLogout = logoutUser();

    if (canLogout) {
      router.push("/");
    }
  };

  const goBackPrevPage = (prevPage) => {
    router.push(prevPage);
  };

  return (
    <View
      style={[
        Screen_Header_Styles.screenHeader_MainView,
        { backgroundColor: headerColor },
      ]}
    >
      <View style={Screen_Header_Styles.screenHeader_BackButtonView}>
        {isLoggedIn ? (
          <TouchableOpacity
            onPress={finalizeLogout}
            style={{
              padding: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <MaterialIcons
              name="logout"
              size={RFValue(20)}
              color={headerColor}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              goBackPrevPage(prevPage);
            }}
            style={{
              padding: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Ionicons
              name="caret-back-circle"
              size={RFValue(20)}
              color={headerColor}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={Screen_Header_Styles.screenHeader_TextView}>
        <Text
          style={{
            color: "white",
            fontFamily: "PoppinsBold",
            fontSize: RFValue(13),
          }}
        >
          {text}
        </Text>
      </View>
      {isLoggedIn ? (
        <View style={Screen_Header_Styles.screenHeader_QuickButtonsView}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="person-circle" size={RFValue(21)} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="settings-sharp"
              size={RFValue(21)}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={Screen_Header_Styles.screenHeader_EmptyView}></View>
      )}
    </View>
  );
};

export default ScreenHeader;

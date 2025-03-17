import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { router, usePathname } from "expo-router";

import Top_Buttons_Styles from "../../styles/Global/Top_Buttons_Styles";

const TopButtons = ({ openSettings }) => {
  const pathName = usePathname();
  const onStartScreen = pathName === "/";

  function goBack() {
    router.back();
  }

  return (
    <View style={[Top_Buttons_Styles.topButtonsView]}>
      {/**
        <TouchableOpacity style={[Top_Buttons_Styles.helpButton]}>
        <Image
          source={require("../../imgs/icons/info.png")}
          style={[{ width: 30, height: 30, resizeMode: "contain" }]}
        />
      </TouchableOpacity>  
      */}

      {!onStartScreen ? (
        <TouchableOpacity onPress={goBack}>
          <Image
            source={require("../../imgs/icons/back.png")}
            style={[{ width: 30, height: 30, resizeMode: "contain" }]}
          />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <View style={[]}>
        <TouchableOpacity
          style={[Top_Buttons_Styles.settingsButton]}
          onPress={openSettings}
        >
          <Image
            source={require("../../imgs/icons/settings.png")}
            style={[{ width: 30, height: 30, resizeMode: "contain" }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopButtons;

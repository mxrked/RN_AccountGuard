import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import Top_Buttons_Styles from "../../styles/Global/Top_Buttons_Styles";

const TopButtons = ({ openSettings }) => {
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
  );
};

export default TopButtons;

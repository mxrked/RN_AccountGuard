import React from "react";

import { View, Image } from "react-native";

import Logo_Styles from "../../styles/Components/Logo_Styles";

const Logo = () => {
  return (
    <View style={Logo_Styles.logo_MainView}>
      <Image
        source={require("../../imgs/logos/logo.webp")}
        style={Logo_Styles.logo_Img}
      />
    </View>
  );
};

export default Logo;

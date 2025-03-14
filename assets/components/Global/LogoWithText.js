import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";

import { useFonts } from "expo-font";

import Logo_With_Text_Styles from "../../styles/Global/Logo_With_Text_Styles";

const LogoWithText = ({ text }) => {
  const [customFonts] = useFonts({
    QuicksandBold: require("../../fonts/quicksand/Quicksand-Bold.ttf"),
  });

  return (
    <View style={[Logo_With_Text_Styles.logoView]}>
      <Image
        source={require("../../imgs/logos/white-logo.png")}
        style={[Logo_With_Text_Styles.logo]}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: "-50",
          fontFamily: "QuicksandBold",
          color: "white",
          fontSize: 17,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default LogoWithText;

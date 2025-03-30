import React from "react";
import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

import { TouchableOpacity, Text, View } from "react-native";

import Custom_Button_Styles from "../../styles/Components/Custom_Button_Styles";

export default CustomButton = ({ text, onPressFunc, customStyle }) => {
  const [customFonts] = useFonts({
    PoppinsBold: require("../../fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../../fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../fonts/Poppins/Poppins-Medium.ttf"),
  });

  return (
    <TouchableOpacity
      style={[Custom_Button_Styles.globalButton, customStyle]} // Merge customStyle with default button style
      onPress={onPressFunc}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "PoppinsBold",
          fontWeight: "bold",
          fontSize: RFValue(18),
          position: "relative",
          paddingTop: 7,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

import React from "react";
import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

import { View, TextInput } from "react-native";

import Custom_Input_Styles from "../../styles/Components/Custom_Input_Styles";

const CustomInput = ({ type, placeholder, id, value, onChangeText }) => {
  const [customFonts] = useFonts({
    PoppinsBold: require("../../fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../../fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../fonts/Poppins/Poppins-Medium.ttf"),
  });

  if (type === "password") {
    return (
      <View style={[Custom_Input_Styles.customInput_TypeView]}>
        <TextInput
          style={{ fontFamily: "PoppinsMedium", fontSize: RFValue(12) }}
          id={id}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={true} // Hides the password text
        />
      </View>
    );
  } else {
    return (
      <View style={[Custom_Input_Styles.customInput_TypeView]}>
        <TextInput
          style={{ fontFamily: "PoppinsMedium", fontSize: RFValue(12) }}
          id={id}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    );
  }
};

export default CustomInput;

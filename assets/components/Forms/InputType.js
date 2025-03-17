import React from "react";
import { TextInput, View, Text } from "react-native";

import Input_Type_Styles from "../../styles/Forms/Input_Type_Styles";

import { useFonts } from "expo-font";

const InputType = ({ type, placeholder, id, value, onChangeText }) => {
  const [customFonts] = useFonts({
    QuicksandBold: require("../../fonts/quicksand/Quicksand-Bold.ttf"),
  });

  if (!customFonts) {
    return null; // Wait until the font is loaded
  }

  if (type === "password") {
    return (
      <View style={[Input_Type_Styles.inputTypeView]}>
        <TextInput
          style={{ fontFamily: "QuicksandBold" }}
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
      <View style={[Input_Type_Styles.inputTypeView]}>
        <TextInput
          style={{ fontFamily: "QuicksandBold" }}
          id={id}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    );
  }
};

export default InputType;

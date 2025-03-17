import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import { useFonts } from "expo-font";

import Created_By_Text_Styles from "../../styles/Global/Created_By_Text_Styles";

const CreatedByText = () => {
  const [customFonts] = useFonts({
    QuicksandBold: require("../../fonts/quicksand/Quicksand-Bold.ttf"),
  });

  const goToDWT = () => {
    Linking.openURL("https://dynamicwebtechnologies.com/");
  };

  return (
    <View style={[Created_By_Text_Styles.createdByTextView]}>
      <Text
        style={[
          {
            fontFamily: "QuicksandBold",
            fontWeight: "400",
            textAlignVertical: "center",
            color: "white",
            fontSize: 15,
          },
        ]}
      >
        Created By
      </Text>
      <TouchableOpacity onPress={goToDWT}>
        <Text
          style={[
            {
              fontFamily: "QuicksandBold",
              textAlignVertical: "center",
              fontWeight: "400",
              color: "white",
              fontSize: 15,
              marginTop: 5,
              textDecorationLine: "underline",
            },
          ]}
        >
          Dynamic Web Technologies
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatedByText;

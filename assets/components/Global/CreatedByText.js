import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useFonts } from "expo-font";

import Created_By_Text_Styles from "../../styles/Components/Created_By_Text_Styles";

const CreatedByText = () => {
  const [customFonts] = useFonts({
    PoppinsBold: require("../../fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../../fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../fonts/Poppins/Poppins-Medium.ttf"),
  });

  return (
    <View style={[Created_By_Text_Styles.createdByText_View]}>
      <Text
        style={[
          {
            fontFamily: "PoppinsMedium",
            textAlignVertical: "center",
            textAlign: "center",
            color: "white",
            fontSize: RFValue(12),
          },
        ]}
      >
        Created By {"\n"}{" "}
        <Text
          style={[
            {
              fontFamily: "PoppinsBold",
              fontWeight: "bold",
              textAlignVertical: "center",
              textAlign: "center",
              color: "white",
              fontSize: RFValue(12),
            },
          ]}
        >
          Dynamic Web Technologies
        </Text>
      </Text>
    </View>
  );
};

export default CreatedByText;

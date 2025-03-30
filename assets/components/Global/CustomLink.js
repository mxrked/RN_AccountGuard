import React from "react";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

import { TouchableOpacity, Text, View, Linking } from "react-native";

import Custom_Link_Styles from "../../styles/Components/Custom_Link_Styles";

const CustomLink = ({ text, link, customStyle }) => {
  const router = useRouter();

  const [customFonts] = useFonts({
    PoppinsBold: require("../../fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../../fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../fonts/Poppins/Poppins-Medium.ttf"),
  });

  const goToLink = () => {
    router.push(link);
  };

  return (
    <TouchableOpacity onPress={() => goToLink()} style={[customStyle]}>
      <View style={Custom_Link_Styles.customLink_View}>
        <Text
          style={[
            {
              fontFamily: "PoppinsMedium",
              fontWeight: "bold",
              textAlignVertical: "center",
              color: "white",
              textDecorationLine: "underline",
              fontSize: RFValue(14),
            },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomLink;

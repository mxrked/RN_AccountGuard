import React from "react";

import { TouchableOpacity, Text, View } from "react-native";

import Custom_Button_Styles from "../../styles/Global/Custom_Button_Styles";

export default CustomButton = ({ text, onPressFunc, customStyle }) => {
  return (
    <TouchableOpacity onPress={onPressFunc} style={customStyle}>
      <View style={[Custom_Button_Styles.globalButton]}>
        <Text
          // href="/register"
          style={[
            {
              fontFamily: "QuicksandBold",
              fontWeight: "bold",
              textAlignVertical: "center",
              paddingLeft: 12,
              paddingRight: 12,
              color: "white",
              fontSize: 15,
              flexWrap: "wrap",
            },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

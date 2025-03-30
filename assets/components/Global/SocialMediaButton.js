import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import Social_Media_Button_Styles from "../../styles/Components/Social_Media_Button_Styles";

export default SocialMediaButton = ({ icon, link, customStyle }) => {
  const goToSocialMedia = (link) => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity
      onPress={() => goToSocialMedia(link)}
      style={[Social_Media_Button_Styles.socialMediaButton, customStyle]} // Merge customStyle with default button style
    >
      {icon}
    </TouchableOpacity>
  );
};

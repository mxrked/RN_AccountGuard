import { StyleSheet } from "react-native";

const Start_Screen_Styles = StyleSheet.create({
  startScreenMV: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  startScreenLogoView: {},
  startScreenLogo: {
    width: 320,
    height: 180,
    resizeMode: "contain",
    // marginBottom: 60,
  },
  startScreenButtonsView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  loginButtonView: {
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, .20)",
    boxShadow: "0px 0px 2px rgba(45, 43, 43, .20)",
    position: "relative",
  },
  registerButtonView: {
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, .20)",
    boxShadow: "0px 0px 2px rgba(45, 43, 43, .20)",
    position: "relative",
  },
  exitButtonView: {
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255,1)",
    boxShadow: "0px 0px 2px rgba(45, 43, 43, .20)",
    position: "relative",
  },
});

export default Start_Screen_Styles;

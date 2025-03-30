import { StyleSheet } from "react-native";

const Start_Screen_Styles = StyleSheet.create({
  startScreen_MainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: 0,
  },
  startScreen_LoginFormView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    maxWidth: 300,
    textAlign: "left",
  },
  startScreen_SocialMediaView: {
    marginTop: 35,
    marginBottom: 110,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
    maxWidth: 150,
  },
});

export default Start_Screen_Styles;

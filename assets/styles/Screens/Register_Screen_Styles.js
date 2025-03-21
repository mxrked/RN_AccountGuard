import { StyleSheet } from "react-native";

const Register_Screen_Styles = StyleSheet.create({
  registerScreenMainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  registerFormView: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 75,
    width: "100%",
    maxWidth: 300,
    textAlign: "left",
    // backgroundColor: "white",
  },
  registerFormButtonsView: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 40,
  },
});

export default Register_Screen_Styles;

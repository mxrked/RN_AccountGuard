import { StyleSheet } from "react-native";

const Login_Screen_Styles = StyleSheet.create({
  loginScreenMainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  loginFormView: {
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
  loginFormButtonsView: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 40,
  },
});

export default Login_Screen_Styles;

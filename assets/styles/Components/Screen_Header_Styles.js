import { StyleSheet } from "react-native";

const Screen_Header_Styles = StyleSheet.create({
  screenHeader_MainView: {
    flex: 0.005,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Space out the button and text
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  screenHeader_BackButtonView: {
    flex: 0, // Makes the button container just as big as the button itself
  },
  screenHeader_TextView: {
    flex: 1, // Makes the text container take all available space
    alignItems: "center", // Centers the text horizontally
    justifyContent: "center", // Centers the text vertically
    flexDirection: "row",
  },
  screenHeader_QuickButtonsView: {
    flex: 0,
    flexDirection: "row",
  },
  screenHeader_EmptyView: {
    flex: 0.13,
  },
});

export default Screen_Header_Styles;

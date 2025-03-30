import { StyleSheet } from "react-native";

const Custom_Button_Styles = StyleSheet.create({
  globalButton: {
    backgroundColor: "rgba(222, 68, 68, 0.9)",
    shadowColor: "rgba(45, 43, 43, .20)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    textAlign: "center",
    paddingVertical: 10,
    paddingBottom: 14,
    paddingHorizontal: 7,
    borderRadius: 50,
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row", // This allows flexbox layout
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
});

export default Custom_Button_Styles;

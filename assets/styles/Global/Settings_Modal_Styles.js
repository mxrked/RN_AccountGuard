import { StyleSheet } from "react-native";

const Settings_Modal_Styles = StyleSheet.create({
  settingsModal: {
    flex: 1,
    backgroundColor: "#2D2B2B", // Dark overlay with transparency
    justifyContent: "center",
    // alignItems: "center",
  },
  settingsModalTop: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
  },
  settingsModalCloser: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  settingsModalMain: {
    padding: 30,
  },
  settingsAppRefresher: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reloadAppButton: {
    backgroundColor: "rgba(255, 255, 255, .20)",
    boxShadow: "0px 0px 2px rgba(45, 43, 43, .20)",
    flex: 1,
    padding: 10,
    maxWidth: 200,
    textAlign: "right",
    color: "white",
    borderRadius: 5,
  },
});

export default Settings_Modal_Styles;

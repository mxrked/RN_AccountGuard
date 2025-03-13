import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import * as Updates from "expo-updates";
import { useFonts } from "expo-font";

import Settings_Modal_Styles from "../../styles/Global/Settings_Modal_Styles";

const SettingsModal = ({ settingsOpened, closeSettings }) => {
  const [customFonts] = useFonts({
    QuicksandBold: require("../../fonts/quicksand/Quicksand-Bold.ttf"),
  });

  const reloadApp = async () => {
    try {
      await Updates.reloadAsync(); // Reloads the app
    } catch (error) {
      console.error("Error reloading app:", error);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={settingsOpened}
      onRequestClose={closeSettings}
    >
      <View style={[Settings_Modal_Styles.settingsModal]}>
        <View style={[Settings_Modal_Styles.settingsModalTop]}>
          <TouchableOpacity
            style={[Settings_Modal_Styles.settingsModalCloser]}
            onPress={closeSettings}
          >
            <Image
              source={require("../../imgs/icons/close.png")}
              style={[
                {
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  marginRight: 20,
                },
              ]}
            />
            <Text
              style={[
                {
                  fontFamily: "QuicksandBold",
                  textAlignVertical: "center",
                  color: "white",
                  fontSize: 17,
                },
              ]}
            >
              CLOSE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[Settings_Modal_Styles.settingsModalMain]}>
          <View style={[Settings_Modal_Styles.settingsAppRefresher]}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 15,
                fontFamily: "QuicksandBold",
              }}
            >
              APP LAGGING?
            </Text>

            <TouchableOpacity
              onPress={reloadApp}
              style={[Settings_Modal_Styles.reloadAppButton]}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "QuicksandBold",
                }}
              >
                Reload App
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, BackHandler, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react"; // Import useEffect to add/remove the back button handler

export default function RootLayout() {
  useEffect(() => {
    const backAction = () => {
      // Display an alert asking if the user wants to exit
      Alert.alert("Exit App", "Do you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel", // Cancel the action
        },
        {
          text: "Yes",
          onPress: () => BackHandler.exitApp(), // Exit the app if "Yes" is pressed
        },
      ]);
      return true; // Prevent the default back button action
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Cleanup the event listener when the component unmounts
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <SafeAreaProvider>
      {/* Set the status bar style and background color */}
      <StatusBar style="light" backgroundColor="black" />
      <Root />
    </SafeAreaProvider>
  );
}

function Root() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Your background color
  },
});

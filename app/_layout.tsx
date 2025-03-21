import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, BackHandler } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react"; // Import useEffect to add/remove the back button handler

export default function RootLayout() {
  useEffect(() => {
    const backAction = () => {
      return true; // Disable hardware back button (does nothing)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up the event listener when the component unmounts
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

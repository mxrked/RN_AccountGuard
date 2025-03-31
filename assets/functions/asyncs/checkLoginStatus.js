/**
 * This function is used to check if the user is logged in by grabbing a storage variable
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function checkLoginStatus() {
  try {
    const status = await AsyncStorage.getItem("@isLoggedIn");
    return status !== null ? JSON.parse(status) : false;
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
}

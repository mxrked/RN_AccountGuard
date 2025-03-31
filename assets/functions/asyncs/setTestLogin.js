/**
 * This function is for testing that the user is logged in
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setTestLogin() {
  // For testing: Set the @isLoggedIn flag to 'true' (logged in) or 'false' (logged out)
  await AsyncStorage.setItem("@isLoggedIn", JSON.stringify(true)); // Change to false for logged out state
}

/**
 * This function will logout the current user
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function logoutUser() {
  try {
    const getLoggin = await AsyncStorage.getItem("@isLoggedIn");

    if (getLoggin) {
      await AsyncStorage.removeItem("@isLoggedIn");

      return true;
    } else {
      console.log("The user is not even logged in..");
      return false;
    }
  } catch (error) {
    console.error("Error logging the user out:", error);
    return false;
  }
}

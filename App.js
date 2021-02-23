import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Fonts 
import * as Font from "expo-font"  // npm install expo-font
import AppLoading from 'expo-app-loading';

// Components
import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {

  const [ fontLoaded, setFontLoaded ] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({

});

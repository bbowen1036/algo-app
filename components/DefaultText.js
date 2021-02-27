import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = props => {
  return <Text style={styles.font}>{props.children}</Text>
}

const styles = StyleSheet.create({
  font: {
    fontWeight: "bold"
  }
})

export default DefaultText
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";

import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const ListItem = (props) => {
  return (
    <SyntaxHighlighter language="javascript" highlighter={"prism" || "hljs"}>
      {props.children}
    </SyntaxHighlighter>
  );
};

const Prompt = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.prompt}>
        <SyntaxHighlighter
          language="javascript"
          highlighter={"prism" || "hljs"}
        >
          {props.children}
        </SyntaxHighlighter>

        {props.example.map((example) => (
          <ListItem key={example}>{example}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: Colors.backGroundColor,
    padding: 15,
  },
  prompt: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  listItem: {
    paddingVertical: 10,
  },
});

export default Prompt;

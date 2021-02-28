import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Card, SocialIcon } from 'react-native-elements'
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";


const AboutScreen = () => {
  return (
    <View style={styles.screen}>

    <Card containerStyle={styles.card}>
      <Card.Title style={{color: Colors.accentColor}}>HELLO WORLD!</Card.Title>
      <Card.Divider />
      <View style={styles.imgContainer}>

      <Card.Image
        style={styles.image}
        source={{
          uri:
            "https://oceanstar-seed.s3-us-west-1.amazonaws.com/Albatross9663.jpg",
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      </View>
      <Card.Divider />
      <Text style={styles.text}>Welcome to my first Native app!</Text>
      <Text style={styles.text}>It was an in depth study of React Native and Expo, with cross functionality on both IOS and Android platforms.</Text>
      <Text style={styles.text}>This app is a collection and study guide of algorithmic problems I've solved</Text>
      <Card.Divider style={{marginVertical: 15}}/>
      <Card.Title style={{color: Colors.accentColor}}>Hire me! -Brian </Card.Title>
    
    </Card>
    </View>
  );
};

AboutScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "About Me",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          /*iconName="ios-menu"*/ onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    marginTop: 60
  },
  card: {
    width: "80%",
    alignItems: "center",
    borderRadius: 15
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 250,
    marginBottom: 15,
  },
  text: {
    marginVertical: 3,
    textAlign: "center"
  }
})

export default AboutScreen
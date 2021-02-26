// React
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// Redux
import { useSelector } from "react-redux";
// Components
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  // render other info if favMeals is empty
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorites found. Start adding some!</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" /*iconName="ios-menu"*/ onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    ),
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;

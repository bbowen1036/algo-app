// React
import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
// Components
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Prompt from "../components/Prompt";
import SyntaxHighlighter from 'react-native-syntax-highlighter';


const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({mealTitle: selectedMeal.title})
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);


  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite})
  }, [currentMealIsFavorite]);

  const codeString = "function minChange(array) \n {if (array.length === 0) return 1";
  return (
    <ScrollView>
      {/* <Prompt propmt={selectedMeal.prompt} />  */}
      <Prompt example={selectedMeal.example}>{selectedMeal.prompt}</Prompt>
      {/* <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} /> */}
      <View style={styles.details}>
        <DefaultText>time: {selectedMeal.duration}</DefaultText>
        <DefaultText>space: {selectedMeal.complexity}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Pseudo Code</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Solution</Text>

      <SyntaxHighlighter language="javascript" highlighter={"prism" || "hljs"}>
        {selectedMeal.steps}
      </SyntaxHighlighter>

      {/* {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
};

// set header

MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={ isFavorite ? "💜" : "🤍" }
          // iconName="ios-star"
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "#fca311"
  },
  title: {
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10  
  },
  text: {
    fontSize: 30
  }
});

export default MealDetailScreen;

// React
import React from 'react';
import { View, StyleSheet } from 'react-native';
// Redux
import { useSelector } from "react-redux";
import { CATEGORIES } from '../data/dummy-data';
// Components
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  // UseSelector returns requested part of state. Here we want to display
  // filtered meals. by default it will show all at the begininning or when no filters are set
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No problems found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default CategoryMealScreen;

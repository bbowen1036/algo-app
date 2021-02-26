import React from 'react';
// Redux
import { useSelector } from "react-redux";


import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  // UseSelector returns requested part of state. Here we want to display
  // filtered meals. by default it will show all at the begininning or when no filters are set
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};


export default CategoryMealScreen;

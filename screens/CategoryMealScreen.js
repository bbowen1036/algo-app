import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";


const CategoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

// CategoriesScreen.navigationOptions = {
//   headerTitle: "Meal Categories",
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
//   },
//   headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default CategoryMealScreen;

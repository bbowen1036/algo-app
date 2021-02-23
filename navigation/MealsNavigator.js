import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealScreen
  },
  MealDetail: MealDetailScreen
})

// createAppContainer is the pattern to wrap root using navigation
export default createAppContainer(MealsNavigator)
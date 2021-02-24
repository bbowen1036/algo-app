import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

// createAppContainer is the pattern to wrap root using navigation
export default createAppContainer(MealsNavigator)
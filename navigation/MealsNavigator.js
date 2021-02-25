import React from "react"
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

// Screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor:
    Platform.OS === "android" ? "white" : Colors.primaryColor,
};

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
  });

  
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      // tabBarIcon: (tabInfo) => {
      //   return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      // }
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
    },
  },
}

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: Colors.accentColor,
      shifting: true
    })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
          tabBarOptions: {
            activeTintColor: Colors.accentColor,
          },
        }
      );

// createAppContainer is the pattern to wrap root using navigation
export default createAppContainer(MealsFavTabNavigator);
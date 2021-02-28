import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// Screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import AboutScreen from "../screens/AboutScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    // fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {},
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      // tabBarIcon: (tabInfo) => {
      //   return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      // }
      tabBarLabel: "Main"
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarColor: Colors.primaryColor,
      tabBarLabel: "Favorites",
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters!!"
    // },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: "Menu",
    },
  },
  Filters: FiltersNavigator,
  About: AboutNavigator

}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    // labelStyle: {styles.font}
    
  }
});

const styles = StyleSheet.create({
  font: {
    // fontFamily: "open-sans-bold"
  }
})

// createAppContainer is the pattern to wrap root using navigation
export default createAppContainer(MainNavigator);

// React
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// Redux
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals"
// Components
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(true);
  const [isLactoseFree, setIsLactoseFree] = useState(true);
  const [isVegan, setIsVegan] = useState(true);
  const [isVegetarian, setIsVegetarian] = useState(true);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isVegetarian, isVegan, isGlutenFree, isLactoseFree, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="🟢 Easy"
        state={isGlutenFree}
        onChange={(newState) => setIsGlutenFree(newState)}
      />
      <FilterSwitch
        label="🟠 Medium"
        state={isVegan}
        onChange={(newState) => setIsVegan(newState)}
      />
      <FilterSwitch
        label="🔴 Hard"
        state={isVegetarian}
        onChange={(newState) => setIsVegetarian(newState)}
      />
      <FilterSwitch
        label="⚫️ Black Diamond"
        state={isLactoseFree}
        onChange={(newState) => setIsLactoseFree(newState)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Problems",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Save"
        /*iconName="ios-menu"*/
        onPress={navData.navigation.getParam("save")}
      />
    </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});

export default FiltersScreen;

import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {   // Meal is already in favorites, need to remove
        const updatedFavMeals = [ ...state.favoriteMeals ];
        updatedFavMeals.splice(existingIndex, 1)
        return { ...state, favoriteMeals: updatedFavMeals }
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal)}
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && meal.isGlutenFree) {
          return true
        }
        if (appliedFilters.lactoseFree && meal.isLactoseFree) {
          return true
        }
        if (appliedFilters.vegetarian && meal.isVegetarian) {
          return true
        }
        if (appliedFilters.vegan && meal.isVegan) {
          return true
        }
        return false
      });

      return { ...state, filteredMeals: updatedFilteredMeals}

    default:
      // default state is ALWAYS reached when the app starts and the redux store is initialized
      return state;
  }
};

export default mealsReducer;
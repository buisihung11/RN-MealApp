import React, { createContext, useReducer, useMemo, useContext } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealContext = createContext();

const initialState = {
  meals: MEALS,
  categories: CATEGORIES,
  filter: {
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: true,
    isVegetarian: false,
  },
};

const MealProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <MealContext.Provider value={value} {...props} />;
};

const setFilters = (state, filter) => {
  const filteredData = MEALS.filter(
    (m) =>
      m.isGlutenFree === filter.isGlutenFree ||
      m.isLactoseFree === filter.isLactoseFree ||
      m.isVegan === filter.isVegan ||
      m.isVegetarian === filter.isVegetarian
  );

  return { ...state, meals: filteredData, filter };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return setFilters(state, action.filter);
    default:
      return { ...state };
  }
};
const actions = () => {};

const useMeal = () => {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMeal must be used within a MealFilterProvider');
  }

  const [state, dispatch] = context;

  return [state, dispatch];
};

export { MealProvider, useMeal };

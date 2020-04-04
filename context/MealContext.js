import React, { createContext, useReducer, useMemo, useContext } from 'react';

const MealContext = createContext();

const initialState = {
  isGlutenFree: false,
  isLactoseFree: false,
  isVegan: true,
  isVegetarian: false,
};

const MealFilterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <MealContext.Provider value={value} {...props} />;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...action.filters };
    default:
      return { ...state };
  }
};
const actions = () => {};

const useMealFilter = () => {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMeal must be used within a MealFilterProvider');
  }

  const [state, dispatch] = context;

  return [state, dispatch];
};

export { MealFilterProvider, useMealFilter };

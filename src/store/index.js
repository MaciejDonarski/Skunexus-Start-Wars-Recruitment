import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "./planet";
import filmReducer from "./film";
import residentReducer from "./resident";
// import moviesReducer from './movies'
// import usersReducer from './users';

export const store = configureStore({
  reducer: {
    planet: planetReducer,
    film: filmReducer,
    resident: residentReducer,
  },
});

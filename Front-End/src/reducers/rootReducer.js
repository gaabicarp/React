import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer
});

export default rootReducer;

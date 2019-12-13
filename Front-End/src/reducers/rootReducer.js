import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  auth
});

export default rootReducer;

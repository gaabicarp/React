import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import auth from "./authReducer";
import ActivityReducer from "./ActivityReducer"

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  auth,
  Activity: ActivityReducer
});

export default rootReducer;

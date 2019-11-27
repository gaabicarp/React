const initialState = {
  Itinerary: []
};

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARY":
      return { ...state, Itinerary: [...action.payload] };
    default:
      return state;
  }
};

export default itineraryReducer;

const initialState = {
  ciudades: []
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, ciudades: [...action.payload] };
    case "BORRAR_CIUDAD":
    //ASDASD
    default:
      return state;
  }
};

export default citiesReducer;

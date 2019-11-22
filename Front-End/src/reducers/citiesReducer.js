const initialState = {
    ciudades: []
}

const citiesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GET_CIUDADES':
            return {...state, ciudades: [...action.payload]}
        case 'BORRAR_CIUDAD':
            //FAFAFA
        default:
            return state
    }
}

export default citiesReducer;
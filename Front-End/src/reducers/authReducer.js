import isEmpty from 'lodash/isEmpty'

const initialState = {
    inAuthenticated: false,
    user: {},
    favorites:{}
};


export default (state = initialState, action = {}) => {
    switch(action.type){
        case "SET_CURRENT_USER":
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        case "SET_FAVORITES":
            return{ ...state, favorites: [...action.payload] };
        default:
            return state;
    }
}
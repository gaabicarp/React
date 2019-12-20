const initialState = {
    Activity: []
};

const ActivityReducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_ACTIVITY":
            return { ...state, Activity: [...action.payload]};
        default:
            return state;
    }
};

export default ActivityReducer;
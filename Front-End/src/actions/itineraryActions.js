import axios from 'axios';

export const getItinerary = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:4000/city/all')
        .then(res =>
            dispatch({
                type: 'GET_CITIES',
                payload: res.data
            })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))))
}
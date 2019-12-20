import axios from 'axios';

export function getActivity(){
    return async dispatch =>{
        let Activity = await axios("http://localhost:4000/activity/")
        Activity = Activity.data.respuesta;
        console.log(Activity);
        dispatch({type: "GET_ACTIVITY", payload: Activity})
    }
}
import axios from 'axios';

export function getItinerary(){
    return async dispatch => {
        let Itinerary = await axios("http://localhost:4000/itinerary/all");
        Itinerary = Itinerary.data.respuesta;
        console.log(Itinerary);
        dispatch({ type: "GET_ITINERARY", payload: Itinerary });
      }
}

import axios from "axios";

const getCities = () =>  dispatch => {
  let ciudades = await axios("http://localhost:4000/city/all");
  ciudades = ciudades.data.respuesta;
  console.log(ciudades);
  dispatch({ type: "GET_CITIES", payload: ciudades });
};

export default getCities;

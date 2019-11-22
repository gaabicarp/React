import React from "react";
import Footer from "./Componentes/Footer";
import {connect} from "react-redux"
import axios from 'axios'

class Cities extends React.Component {

   componentDidMount() {
      this.props.getCities()
    }

  render() {
    return (
      <div className="principal">
        <h1>Ciudades</h1>
        {this.props.listaCiudades.map(city => {
          return <li key={city._id}>{city.ciudad}</li>;
        })}
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    listaCiudades: state.cities.ciudades
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCities: async () => {
      let ciudades = await axios('http://localhost:4000/city/all')
      ciudades = ciudades.data.respuesta
      console.log(ciudades)
      dispatch({type: 'GET_CITIES', payload: ciudades})
    }
  }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)

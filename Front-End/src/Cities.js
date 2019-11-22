import React from "react";
import Footer from "./Componentes/Footer";
import {connect} from "react-redux"

class Cities extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   loading: false,
    //   cities: [],
    //   url: "http://localhost:4000/city/all"
    // };
  }

  componentDidMount() {
    this.getCities();
  }

  getCities = () => {
    fetch("http://localhost:4000/city/all")
      .then(res => res.json())
      .then(res => this.props.rellenarCiudades(res))
      .catch(e => console.log(e));
  };

  render() {
    console.log(this.props.listaCiudades)

    return (
      <div className="principal">
        <h1>asdas</h1>
        {/* {this.props.listaCiudades.map(city => {
          return <li key={city._id}>{city.ciudad}</li>;
        })} */}
        <Footer />
      </div>
    );
  }
}
const GETUSR = 'GET_USUARIOS';

const mapDispatchToProps = (dispatch) => {
  return {
    rellenarCiudades: (res) => {
      dispatch({
        type: GETUSR,
        payload: res
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listaCiudades: state.ciudades
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)

import React from "react";
import Footer from "./Componentes/Footer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import logo from "./Componentes/img/Logo.png";
import Typography from "@material-ui/core/Typography";
import { getCities } from "./actions/cityActions";
import Cabecera from "./Componentes/Cabecera";
import SearchIcon from '@material-ui/icons/Search';

class Cities extends React.Component {
  constructor(props){
    super(props);
    this.props.getCities();
    this.state={
      filtro: ''
    }
  }

  onChange = (e) =>{
    this.setState({filtro: e.target.value.substr(0, 20)})
  }

  render() {
    const {filtro} = this.state
    let listafiltrada = this.props.listaCiudades.filter(item =>{
      return item.ciudad.toLowerCase().indexOf(this.state.filtro.toLowerCase()) !== -1;
    })
    const {auth} = this.props

    return (
      <React.Fragment>
        <div className="principal">
        <Cabecera/>
            <h3>Encontra tu próximo viaje</h3>
          <div>
          <SearchIcon/>
          <input type="text" name="filtro" placeholder="Buscar..." value={filtro} onChange={this.onChange}/>
          </div>
          {listafiltrada.map(city => {
            return (
              <div className="card">
              <Link to={`/itineraries/${city._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={city.ciudad}
                    height="140"
                    image={`http://localhost:4000${city.imgCity}`}
                    title={city.ciudad}
                  />
                  <CardContent>
                    <h5>
                      {city.ciudad}
                      </h5>
                      <p>{city.descr}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Link>
              </div>
            );
          })}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    listaCiudades: state.cities.ciudades,
    auth: state.auth
  };
};


export default connect(mapStateToProps, {getCities})(Cities);

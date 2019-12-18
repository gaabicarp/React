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

class Cities extends React.Component {
  constructor(props){
    super(props);
    this.props.getCities();
    this.state={
      filtro: ""
    }
  }

  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state.filtro)
  }

  render() {
    const {filtro} = this.state
    return (
      <React.Fragment>
        <div className="principal">
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <br></br>
          <h1>Encontra tu próximo viaje</h1>
          <input type="text" name="filtro" value={filtro} onChange={this.onChange}/>
          {this.props.listaCiudades.map(city => {
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
                    <Typography gutterBottom variant="h5" Component="h2">
                      {city.ciudad}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" Component="p">
                      {city.descr}
                    </Typography>
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
    listaCiudades: state.cities.ciudades
  };
};


export default connect(mapStateToProps, {getCities})(Cities);

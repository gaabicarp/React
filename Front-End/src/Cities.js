import React from "react";
import Footer from "./Componentes/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Cities extends React.Component {
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    return (
      <React.Fragment>
        <div className="principal">
          <h1>Ciudades</h1>
          {this.props.listaCiudades.map(city => {
            return (
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="https://www.oirealtor.com/noticias-inmobiliarias/wp-content/uploads/2018/10/oirealtor-noticias-vivir-en-barcelona-ciudad-noche.jpg"
                    title={city.ciudad}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" Component="h2">
                      {city.ciudad}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" Component="p">
                      Re hardcodeado
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to={`/itineraries/${city._id}`}>Ver más</Link>
                  </Button>
                </CardActions>
              </Card>
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

const mapDispatchToProps = dispatch => {
  return {
    getCities: async () => {
      let ciudades = await axios("http://localhost:4000/city/all");
      ciudades = ciudades.data.respuesta;
      console.log(ciudades);
      dispatch({ type: "GET_CITIES", payload: ciudades });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);

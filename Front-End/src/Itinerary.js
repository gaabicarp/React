import React from "react";
import Footer from "./Componentes/Footer";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { getItinerary } from "./actions/itineraryActions"


class Itinerary extends React.Component {
  constructor(props){
    super(props);
    this.props.getItinerary();
  }

  render() {
    const {match} =this.props;
    return (
      <div className="principal">
        <h1>Ciudades</h1>
        <p>
          {match.params.id}
        </p>
        {this.props.listaItinerary.map(itinerary => {
          if (itinerary.city_id === match.params.id){return (
            <Card>
              <CardActionArea>
                <CardMedia
                  image="https://www.oirealtor.com/noticias-inmobiliarias/wp-content/uploads/2018/10/oirealtor-noticias-vivir-en-barcelona-ciudad-noche.jpg"
                  title={itinerary.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" Component="h2">
                    {itinerary.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" Component="p">
                    Re hardcodeado
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
              </CardActions>
            </Card>
          )}
          ;
        })}
          <Footer />

      </div>
    ); 
  }
}



const mapStateToProps = state => {
  return {
    listaItinerary: state.itineraries.Itinerary
  };
};

export default connect(mapStateToProps, {getItinerary})(Itinerary);

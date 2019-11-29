import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



class Vista extends React.Component{

render(){
    const { match } = this.props;
    return(
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
}

export default Vista;
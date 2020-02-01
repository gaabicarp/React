import React from 'react'
import {CardActionArea, Button, Collapse, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Modal from '@material-ui/core/Modal';
import Activities from "./Activities"
import { connect } from "react-redux";
import Axios from 'axios';
import {favoritesactions} from "../actions/AuthActions"


class CardItine extends React.Component{
  constructor(props){
    super(props)
    this.state={
      expanded: false
    }
  }

  expand = () =>{
    this.setState({expanded: !this.state.expanded})
  }

  favorite = () =>{
    const data= {
      id: this.props.auth.user.id,
      favorite: this.props.store._id
    }

    Axios.put(
      'http://localhost:4000/user/favorite',
      data
    )
    .then(response =>{
      console.log(response.config.data);
    })
    .catch(error =>{
      console.log(error)
    })

    this.props.favoritesactions(data.id)
  }

render(){
    const itinerary = this.props.store
    return(
      <div className="card">
      <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar alt={itinerary.owner.local.UserName} src={`http://localhost:4000${itinerary.owner.local.profileImage}`} />
          }   
          title={itinerary.title}
          subheader={itinerary.owner.local.UserName}               
          
        />
        <CardMedia
          component="img"
          alt={itinerary.title}
          height="140"
          image={`http://localhost:4000${itinerary.itineraryImg}`}
          title={itinerary.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Raiting: {itinerary.raiting} Duracion: {itinerary.duration} Precio: {itinerary.price}</p>
            {itinerary.hashtags}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={this.favorite}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="outlined" onClick={this.expand}> Ver Actividades</Button>
        </CardActions>
        </CardActionArea>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Actividades:</Typography>
          <Activities store={itinerary._id}/>
        </CardContent>
      </Collapse>
        </Card>

    </div>

    )}
}

const mapStateToProps = state => {
  return{
  auth: state.auth
  };
};

export default connect(mapStateToProps, {favoritesactions})(CardItine);
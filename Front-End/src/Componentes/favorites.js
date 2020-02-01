import React from "react";
import Footer from "./Footer";
import { connect } from "react-redux";
import CardItine from "./CardItine"
import Cabecera from "./Cabecera";
import { getItinerary } from "../actions/itineraryActions";
import Itinerary from "../Itinerary";
import { favoritesactions } from "../actions/AuthActions";

class Favorites extends React.Component {
  constructor(props){
    super(props);
    this.props.getItinerary();
    }


  componentDidMount(){
    this.props.favoritesactions(this.props.auth.user.id)
  }
  render() {
    const {auth, listaItinerary} = this.props;
    console.log(auth)
    return (
      <div className="principal">
        <Cabecera/>
        <h3>Itinerarios Favoritos</h3>
        
        {listaItinerary.map(itinerary=>{
          for(var i = 0; i <= auth.favorites.length; i++){
            if (itinerary._id === auth.favorites[i]){
                return <CardItine store={itinerary}/>
              }
          }
        })}

      <Footer />

      </div>
    ); 
  }
}


const mapStateToProps = state => {
    return {
      auth: state.auth,
      listaItinerary: state.itineraries.Itinerary,
    };
  };
  
  export default connect(mapStateToProps, {getItinerary, favoritesactions})(Favorites);
  
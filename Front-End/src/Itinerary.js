import React from "react";
import Footer from "./Componentes/Footer";
import { connect } from "react-redux";
import logo from "./Componentes/img/Logo.png";
import { getItinerary } from "./actions/itineraryActions"
import CardItine from "./Componentes/CardItine"

class Itinerary extends React.Component {
  constructor(props){
    super(props);
    this.props.getItinerary();
  }

  render() {
    const {match} =this.props;
    return (
      <div className="principal">
        <div className="logo">
          <img alt="logo" src={logo}></img>
        </div>
        <h3>Itinerary</h3>

        <div>
    </div>
        {this.props.listaItinerary.map(itinerary => {
          if (itinerary.city_id === match.params.id){return (
              <CardItine store={itinerary}/>
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
    listaItinerary: state.itineraries.Itinerary,

  };
};

export default connect(mapStateToProps, {getItinerary})(Itinerary);

import React from "react";
import Footer from "./Footer";
import { connect } from "react-redux";
import CardItine from "./CardItine"
import Cabecera from "./Cabecera";

class Favorites extends React.Component {

  render() {
    const {auth} = this.props;
    console.log(auth);
    return (
      <div className="principal">
        <Cabecera/>
        <h3>Lista de Itinerarios</h3>

        <div>
    </div>
        {auth.user.favorites.map(itinerary => {
              return <CardItine store={itinerary}/>
          })}

      <Footer />

      </div>
    ); 
  }
}


const mapStateToProps = state => {
    return {
      auth: state.auth,
  
    };
  };
  
  export default connect(mapStateToProps, null)(Favorites);
  
import React from 'react'
import { connect } from "react-redux";
import {getActivity} from "../actions/ActivityActions"
import CardDeck from 'react-bootstrap/CardDeck'
import CardAct from './CardAct'

class Activities extends React.Component{
    constructor(props){
        super(props)
        this.props.getActivity();
    }

    render(){
        const idItinerary = this.props.store;

        return(
            <CardDeck>
            {this.props.listaActivity.map(Activity => {
                        if (Activity.Itinerary_id === idItinerary){return (
                            <CardAct store={Activity}/>
                    )}
            })}
            </CardDeck>
        )
    }
}

const mapStateToProps = state => {
    return {
      listaActivity: state.Activity.Activity
    };
  };

export default connect(mapStateToProps, {getActivity})(Activities)
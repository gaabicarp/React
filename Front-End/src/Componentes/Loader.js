import React, {useEffect} from "react";
import { connect } from "react-redux";
import {Authcngoogle} from "../actions/AuthActions"

const Loader = props =>{
    const{
        params: {token}
    } = props.match;

    useEffect(() => {
        props.Authcngoogle(token);
        setTimeout(() => {
          props.history.push('/');
        }, 300);
      }, []);

       
        return(
            <div>
                Cargando...
            </div>
        )
    }

export default connect(null, {Authcngoogle})(Loader);
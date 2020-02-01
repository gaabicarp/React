import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import jwt from 'jsonwebtoken';

export function setCurrentUser(user){
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export function AuthActions(data){
    return dispatch =>{
        return axios.post('http://localhost:4000/auth/login', data)
        .then(res =>{
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        })
    }
}

export function Authcngoogle(token){
    return async dispatch =>{
        localStorage.setItem('jwtToken', token)
        setAuthToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
    }
}


export function setfavorites(favs){
    return{
        type: "SET_FAVORITES",
        favs
    }
}

export function favoritesactions(id){
    return dispatch =>{
        return axios.get('http://localhost:4000/user/create')
        .then(res =>{
            console.log(id)
            res.data.respuesta.map(us =>{
                if (us._id === id){
                    console.log('entro:', us.favorites)
                    dispatch( {type: "SET_FAVORITES", payload: us.favorites} )
                }
            })
        })
    }
}
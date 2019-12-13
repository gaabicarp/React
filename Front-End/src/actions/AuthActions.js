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
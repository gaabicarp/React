const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN;

const AuthController = {
    login: async (req,res) =>{
    let UserName = req.body.UserName;
    let Password = req.body.Password;

    User.findOne({UserName})
        .then(user =>{
            if(!user) return res.status(404).send({message: 'El usuario no existe'});
            bcrypt.compare(Password, user.Password)
                .then(match =>{
                    if(match){
                        //ACCESO
                        payload = {
                            UserName: user.UserName,
                            Email: user.Email,
                        }
                        jwt.sign(payload,process.env.SECRET_TOKEN,function(error, token){
                            if(error){
                                res.status(500).send({error})
                            }
                            else{
                                res.status(200).send({message: 'Acceso',token})
                            }
                        } )
                    }
                    else{
                        res.status(200).send({message: 'Pw incorrecta'})//No doy acceso
                    }
                }).catch(error => {
                    console.log(error);
                    res.status(500).send({error})
                })
        }).catch(error =>console.log(error))
    }
}

module.exports = AuthController;
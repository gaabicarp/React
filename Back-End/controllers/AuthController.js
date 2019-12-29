const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN;

const AuthController = {
    login: async (req,res) =>{
    let UserName = req.body.UserName;
    let Password = req.body.Password;
    console.log("acasi")

    User.findOne({"local.UserName": UserName})
        .then(user =>{
            if(!user) return res.status(404).send({message: 'El usuario no existe'});
            bcrypt.compare(Password, user.local.Password)
                .then(match =>{
                    console.log(match)
                    if(match){
                        //ACCESO
                        console.log("entro")
                        payload = {
                            id: user._id,
                            UserName: user.local.UserName,
                            Email: user.local.Email,
                            profileImage: user.local.profileImage,
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
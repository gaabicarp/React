const User = require("../models/Users");
const bcrypt = require("bcryptjs");

const UserController = {
    listarUser: async(req,res) => {
        const data = await User.find();
        res.json({respuesta: data});
    },

    cargarUser: (req, res) => {
        console.log(req.file)
        const nuevoUser = new User({
            method: 'local',
            local: {
                Email: req.body.Email,
                UserName: req.body.UserName,
                Password: req.body.Password,
                profileImage: '/img/user/' + req.file.filename
            }
        });

        bcrypt.genSalt(10).then(salts =>{
            bcrypt.hash(req.body.Password, salts).then(hash =>{
                nuevoUser.local.Password = hash;
                nuevoUser.save();
            }).catch(error=>{
                console.log(error)})
        }).catch(error=>{
            console.log(error)});
        
        
        res.send("Usuario Creado");
    },

    favoritos: async (req, res, next) =>{
        try{
         await User.findById(req.body.id,(err,res)=>{
            aux = res.favorites.indexOf(req.body.favorite);
            if ( aux == -1){
                res.favorites.push(req.body.favorite)
            }
            else {
                    res.favorites.splice( aux, 1 );
                 }
            console.log(res);
            res.save();
            }).catch(error=>{
                console.log(error)
            })
          }
          catch(err){next(err)};  

        },
    
    editUser: async (req,res)=>{
            let ID = req.body.id
            await User.findOne({ _id: ID }, function(err, us){
                if(err){
                    console.log(err);
                    res.staus(500).send();
                } else {
                    if(!us){
                        res.status(404).send();
                    } else{
                        if(req.body.Password){
                            bcrypt.genSalt(10).then(salts =>{
                                bcrypt.hash(req.body.Password, salts).then(hash =>{
                                    us.local.Password = hash;
                                    us.save(function(err, upd){
                                        if(err){
                                            console.log(err)
                                        } else {
                                            console.log('updated',upd)
                                        }
                            })}).catch(err=>{
                                        console.log(err);
                                    })
                                }).catch(err=>{
                                    console.log(err)
                                })
                        }
                        
                    }
                }
            })
        }
                // await User.findOneAndUpdate(
        //     {_id: req.body.id},
        //     { $push: {'favorites' : { $each: [req.body.favorite]}}});
    
};


module.exports = UserController;
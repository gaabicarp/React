const User = require("../models/Users");

const UserController = {
    listarUser: async(req,res) => {
        const data = await User.find().populate("favorites");
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

        nuevoUser.save();
        res.send("Usuario Creado");
    },

    favoritos: async (req, res) =>{
        User.findById(req.body.id, function(err, res){
            console.log(res)
            if (res.favorites.indexOf(req.body.favorite) === -1){
                res.favorites.push(req.body.favorite)
                console.log(res.favorites)
            }
            else{
                for( var i = 0; i < res.favorites.length; i++){ 
                    if ( res.favorites[i] === req.body.favorite) {
                      res.favorites.splice(i, 1);
                      console.log(res.favorites)
            }
        }
        }

            res.update()
        })

        // await User.findOneAndUpdate(
        //     {_id: req.body.id},
        //     { $push: {'favorites' : { $each: [req.body.favorite]}}});
    }
};


module.exports = UserController;
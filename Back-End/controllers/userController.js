const User = require("../models/Users");

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

        nuevoUser.save();
        res.send("Usuario Creado");
    }
};

module.exports = UserController;
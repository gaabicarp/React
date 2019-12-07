const User = require("../models/Users");

const UserController = {
    listarUser: async(req,res) => {
        const data = await User.find();
        res.json({respuesta: data});
    },

    cargarUser: async (req, res) => {
        console.log(req.body.image.name)
        var Firstname = req.body.Firstname;
        var Lastname = req.body.Lastname;
        var Email = req.body.Email;
        var UserName = req.body.UserName;
        var Password = req.body.Password;
        const nuevoUser = new User({
            Firstname: Firstname,
            Lastname: Lastname,
            Email: Email,
            UserName: UserName,
            Password: Password,
        });

        await nuevoUser.save();
        res.send("Usuario Creado");
    }

};

module.exports = UserController;
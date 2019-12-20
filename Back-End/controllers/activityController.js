const Activity = require("../models/Activity");

const activityController = {
    listarActivity: async (req, res) =>{
        const data = await Activity.find();
        res.json({ respuesta: data });
    },
    listarUno: async(req,res) =>{
        let ActivityRequested = req.params.id;
        Activity.findOne({_id: ActivityRequested})
        .then(Activity =>{
            res.send(Activity);
        })
        .catch(err => console.log(err));
    },

    cargarActivity: async (req,res) =>{
        const nuevaActivity = new Activity({
            title: req.body.title,
            adress: req.body.adress,
            imageAct: '/img/Act/' + req.file.filename,
            price: req.body.price,
            description: req.body.description,
            Itinerary_id: req.body.Itinerary_id
        });
        await nuevaActivity.save();
        res.send("Nueva actividad agregada")
    }
}

module.exports = activityController;
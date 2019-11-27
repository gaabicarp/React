const Itinerary = require("../models/Itinerary");

const ItinerartyController = {
    listarItinerary: async (req,res) =>{
        const data = await Itinerary.find();
        res.json({respuesta: data});
    },
    
    cargarItinerary: async (req,res) =>{
        var title = req.body.title;
        var profilePicture = req.body.profilePicture;
        var raiting = req.body.raiting;
        var duration = req.body.duration;
        var price = req.body.price;
        var hashtags = req.body.hashtags;
        const nuevoItinerary = new Itinerary ({
            title: title,
            profilePicture: profilePicture,
            raiting: raiting,
            duration: duration,
            price: price,
            hashtags: hashtags
        });
        
        await nuevoItinerary.save()
        res.send("Nuevo Itinerary agregado");
    }
};

module.exports = ItinerartyController;
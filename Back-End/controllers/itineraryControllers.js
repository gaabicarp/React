const Itinerary = require("../models/Itinerary");

const ItinerartyController = {
  listarItinerary: async (req, res) => {
    const data = await Itinerary.find().populate('owner');
    res.json({ respuesta: data });
  },
  listarUno: async (req, res) => {
    let ItineraryRequested = req.params.id;
    Itinerary.findOne({ _id: ItineraryRequested })
      .then(Itinerary => {
        res.send(Itinerary);
      })
      .catch(err => console.log(err));
  },

  cargarItinerary: async (req, res) => {
    const nuevoItinerary = new Itinerary({
      title: req.body.title,
      owner: req.body.owner,
      itineraryImg: '/img/itinerary/' + req.file.filename,
      raiting: req.body.raiting,
      duration: req.body.duration,
      city_id: req.body.city_id,
      price: req.body.price,
      hashtags: req.body.hashtags
    });

    await nuevoItinerary.save();
    res.send("Nuevo Itinerary agregado");
  }
};

module.exports = ItinerartyController;

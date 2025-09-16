const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    console.log("hello")
    const tours = Tour.getAll()

    res.json(tours)
};

const createTour = (req, res) => {
    const {
        name,
        info,
        image,
        price
    } = req.body

    const newTour = Tour.createOne(name, info, image, price)
    if (newTour) {
        res.json(newTour)
    } else {
        res.status(500).json({ message: "Tour not created." })
    }
};

const getTourById = (req, res) => {
    const tourId = req.params.tourId
    const tour = Tour.findbyID(tourId)
    if (tour) {
        res.json(tour)
    } else {
        res.status(404).json({ message: "Tour not found." })
    }
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId
    const {
        name,
        info,
        image,
        price
    } = req.body

    const updatedTour = Tour.updatebyId(tourId, { name, info, image, price })
    if (updatedTour) {
        res.json(updatedTour)
    } else {
        res.status(404).json({ message: "Not updated." })
    }

}

const deleteTour = (req, res) => {

    const tourId = req.params.tourId
    const deletedTour = Tour.deletebyID(tourId)
    if (deletedTour) {
        res.json({ message: "Deleted succesfully." })

    } else {
        res.status(404).json({ message: "Not deleted." })
    }

};

module.exports = {
    getTourById,
    createTour,
    updateTour,
    deleteTour,
    getAllTours
};
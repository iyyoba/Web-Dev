
let tours = []
let index = 1

function getAll() {
    return tours
}
function findbyID(id) {

    const NumericId = Number(id)
    const tour = tours.find(tour => tour.id === NumericId)
    if (tour) {
        return tour
    } else {
        return false
    }
}

function createOne(name, info, image, price) {

    if (!name || !info || !image || !price) {
        return false
    }
    const newTour = { id: index++, name, info, image, price }
    tours.push(newTour)
    return newTour

}

function updatebyId(id, upadetedValue) {

    const tour = findbyID(id)
    if (tour) {
        if (upadetedValue.name) {
            tour.name = upadetedValue.name
        }
        if (upadetedValue.info) {
            tour.info = upadetedValue.info
        }
        if (upadetedValue.image) {
            tour.image = upadetedValue.image
        }
        if (upadetedValue.price) {
            tour.price = upadetedValue.price
        }

        return tour
    }

    return false

}

function deletebyID(id) {
    const tour = findbyID(id)
    if (tour) {
        const initialLength = tours.length
        tours = tours.filter(tour => tour.id !== Number(id))
        return tours.length < initialLength
    }
    return false
}

/* if (require.main === module) {
    let result = addOne("7 Days Tour", " Join us for the Best of Helsinki!", "https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    // rest of the tests here
} */


module.exports = {
    getAll,
    deletebyID,
    updatebyId,
    createOne,
    findbyID
}
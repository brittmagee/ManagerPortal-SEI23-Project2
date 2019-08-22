const mongoose = require("./connection.js")

//The following code lists all the exhibit animal moves that are scehduled to occur

const animalsSchema = mongoose.Schema(
    {
      //make sure String, Number and Boolean are capitalized 
      type: String,
      species: String,
      quantity: Number,
      exhibit: String,
      date: Date,
      status: String,
      priority: String,
    }
)

const animalsCollection = mongoose.model("animals", animalsSchema)

const exampleAnimal = () => {
    //note: the .create is a Promise
  return animalsCollection.create({
        type: "Fish",
        species: "Blue Tang",
        quantity: 25,
        exhibit: "Ocean Voyager",
        date: "2019-09-15",
        status: "Pending",
        priority: "P3",
  })
}

//retrieve all animals moves from database
const getAllAnimalMoves = () => {
    return animalsCollection.find()
    //note: the .find is a Promise
}

//retrieve a single animal move from the database
const getAnimalMove = (moveId) => {
    return animalsCollection.findById(moveId)
    //note: the .findById is a Promise
}

//add new move to the database
const addNewAnimalMove = (newMove) => {
    console.log(newMove)
   return animalsCollection.create(newMove)
}

//update move with moveId to updatedMove
const updateAnimalMove = (moveId, updatedMove) => {
    return animalsCollection.findByIdAndUpdate(moveId, updatedMove)
}

//deletes move with moveId from database
const deleteAnimalMove = (moveId) => {
    return animalsCollection.findByIdAndDelete(moveId);
}

module.exports = {
    exampleAnimal, 
    getAllAnimalMoves,
    getAnimalMove,
    addNewAnimalMove,
    updateAnimalMove,
    deleteAnimalMove
}
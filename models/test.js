const animalsAPI = require("./animals.js");
// const issueAPI = require("./events.js");
// const issueAPI = require("./feedback.js");

//get all issues in the DB
animalsAPI.exampleAnimal().then((newMove) => {
    console.log(newMove);
    console.log("Description of exhibit move");
})

//get all issues in the DB
animalsAPI.getAllAnimalMoves().then((listmovesInDB) => {
    console.log("All exhibit moves!");
    console.log(listmovesInDB);
})

//get one issues in the DB
animalsAPI.getAnimalMove().then((moveId) => {
    console.log("Get one exhibit");
    console.log(moveId);
})

//adding an issue
animalsAPI.addNewAnimalMove({
    type: "Bird",
    name: "Emperor Penguin",
    quantity: 6,
    exhibit: "Cold water quest",
    date: "2019-08-30",
    status: "In Progress",
    priority: "P1",}).then((newMove) => {
        console.log("Penguins added to exhibit")
        console.log(newMove)
})

//removes all the empty items
// animalsAPI.getAllAnimalMoves().then((allMoves) => {
//     Promise.all(
//         allMoves.filter(move => !move.name).map(animalsAPI.deleteAnimalMove)
//     ).then((deleteMove) => {
//         console.log("all done!");
//         console.log(deleteMove);
//     });
// })

//delete one issue in DB
// issueAPI.deleteIssue("5d5c182e635d323597b158db").then((deleteIssue) => {
//     console.log(deleteIssue);
// })

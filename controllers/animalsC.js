//Step 1: import express
const express = require("express")

//Step 2: Import the api files from the models
const animalsApi = require("../models/animals.js")

// Step 3  Create a new router.
const animalsRouter = express.Router()

// Step 4: Put all request handlers here
animalsRouter.get("/", function(req, res){
  animalsApi.getAllAnimalMoves().then(allAnimalMoves => {
    res.render("./animals/allMoves", {allAnimalMoves});
  })
  // animalsApi.getAllAnimalMoves().then(allAnimalMoves => {
  //   res.send(allAnimalMoves)
  // })
})

animalsRouter.get("/example", function(req, res) {
  animalsApi.exampleAnimal().then((newMove) => {
    res.send(newMove)
  })
})

animalsRouter.get("/newMove", (req, res) => {
  res.render("./animals/newMove", {})
})

animalsRouter.get("/:moveId/editMove", function(req, res){
  const singleMove = animalsApi.getAnimalMove(req.params.moveId).then((allMoves) => {
    res.render("./animals/editMove", {allMoves})
  })
})


animalsRouter.get("/:moveId", function(req,res){
  animalsApi.getAnimalMove(req.params.moveId).then(singleMove => {
    console.log(singleMove)
    res.render("./animals/move", { singleMove });
  })
  // animalsApi.getIssue(req.params.moveId).then(singleMove => {
  //     res.send(singleMove)
  //   })
})


animalsRouter.post("/", function(req, res){
  animalsApi.addNewAnimalMove(req.body).then((newEntry) => {
    // res.send(newEntry)
    console.log(newEntry)
      res.redirect("/ManagersPortal")
    })
})

animalsRouter.put("/:moveId", function(req,res){
  animalsApi.updateAnimalMove(req.params.moveId, req.body).then(() => {
    res.redirect("/ManagersPortal")
    })

    // animalsApi.updateAnimalMove().then(() => {
    //   res.send("/");
    // })
})


animalsRouter.delete("/:moveId", function(req,res){
  animalsApi.deleteAnimalMove(req.params.moveId).then(() => {
    res.redirect("/ManagersPortal")
  })
})

// Step 5: Export the router from the file.
module.exports = {
  animalsRouter
}

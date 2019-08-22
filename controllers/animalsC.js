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

animalsRouter.get("/newIssue", function(req, res) {
  animalsApi.exampleIssue().then((newIssue) => {
    res.send(newIssue)
  })
})

animalsRouter.get("/newIssueForm", (req, res) => {
  res.render("./issues/newIssueForm", {})
})

animalsRouter.get("/:issueId/editIssueForm", function(req, res){
  const singleIssue = animalsApi.getIssue(req.params.issueId).then((entireIssue) => {
    res.render("./issues/editIssueForm", {entireIssue})
  })
})


animalsRouter.get("/:issueId", function(req,res){
  animalsApi.getIssue(req.params.issueId).then(singleIssue => {
    console.log(singleIssue)
    res.render("./issues/issue", { singleIssue });
  })
  // animalsApi.getIssue(req.params.issueId).then(issue => {
  //     res.send(issue)
  //   })
})


animalsRouter.post("/", function(req, res){
  animalsApi.addNewIssue(req.body).then((newData) => {
    // res.send(newData)
    console.log(newData)
      res.redirect("/issues")
    })
})

animalsRouter.put("/:issueId", function(req,res){
  animalsApi.updateIssue(req.params.issueId, req.body).then(() => {
    res.redirect("/issues")
    })

    // animalsApi.updateIssue().then(() => {
    //   res.send("/");
    // })
})


animalsRouter.delete("/:issueId", function(req,res){
  animalsApi.deleteIssue(req.params.issueId).then(() => {
    res.redirect("/issues")
  })
})

// Step 5: Export the router from the file.
module.exports = {
  animalsRouter
}

//Step 1: import express
const express = require("express")

//Step 2: Import the api files from the models
const feedbackApi = require("../models/feedback.js")

// Step 3  Create a new router.
const feedbackRouter = express.Router()

// Step 4: Put all request handlers here
feedbackRouter.get("/", function(req, res){
    feedbackApi.getFeedback().then(allFeedback => {
    res.render("./feedback/allFeedback", {allFeedback});
  })
  // feedbackApi.getFeedback().then(allFeedback => {
  //   res.send(allFeedback)
  // })
})

feedbackRouter.get("/exampleEvent", function(req, res) {
    feedbackApi.exampleFeedback().then((newFeedback) => {
    res.send(newFeedback)
  })
})

feedbackRouter.get("/new", (req, res) => {
  res.render("./feedback/newFeedback", {})
})

feedbackRouter.get("/:feedbackId/edit", function(req, res){
  feedbackApi.getOneFeedback(req.params.feedbackId).then((editFeedback) => {
    res.render("./feedback/editFeedback", {editFeedback})
  })
})


feedbackRouter.get("/:feedbackId", function(req,res){
    feedbackApi.getOneFeedback(req.params.feedbackId).then(singleFeedback => {
    console.log(singleFeedback)
    res.render("./feedback/singleFeedback", { singleFeedback });
  })
  // feedbackApi.getOneFeedback(req.params.feedbackId).then(singleFeedback => {
  //     res.send(singleFeedback)
  //   })
})


feedbackRouter.post("/", function(req, res){
    feedbackApi.addFeedback(req.body).then((newFeedback) => {
    // res.send(newFeedback)
    console.log(newFeedback)
      res.redirect("/feedback")
    })
})

feedbackRouter.put("/:feedbackId", function(req,res){
    feedbackApi.updateFeedback(req.params.feedbackId, req.body).then(() => {
    res.redirect("/feedback")
    })

    // feedbackApi.updateAnimalMove().then(() => {
    //   res.send("/");
    // })
})


feedbackRouter.delete("/:feedbackId", function(req,res){
    feedbackApi.deleteFeedback(req.params.feedbackId).then(() => {
    res.redirect("/feedback")
  })
})

// Step 5: Export the router from the file.
module.exports = {
  feedbackRouter
}
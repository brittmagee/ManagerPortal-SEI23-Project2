//Step 1: import express
const express = require("express")

//Step 2: Import the api files from the models
const eventsApi = require("../models/events.js")

// Step 3  Create a new router.
const eventsRouter = express.Router()

// Step 4: Put all request handlers here
eventsRouter.get("/", function(req, res){
    eventsApi.getEvents().then(allAquariumEvents => {
    res.render("./events/allEvents", {allAquariumEvents});
  })
  // eventsApi.getEvents().then(allEvents => {
  //   res.send(allEvents)
  // })
})

eventsRouter.get("/exampleEvent", function(req, res) {
    eventsApi.exampleEvent().then((newEvent) => {
    res.send(newEvent)
  })
})

eventsRouter.get("/new", (req, res) => {
  res.render("./events/newEvent", {})
})

eventsRouter.get("/:eventId/edit", function(req, res){
  const singleEvent = eventsApi.getOneEvent(req.params.eventId).then((allEvents) => {
    res.render("./events/editEvent", {allEvents})
  })
})


eventsRouter.get("/:eventId", function(req,res){
    eventsApi.getOneEvent(req.params.eventId).then(singleEvent => {
    console.log(singleEvent)
    res.render("./events/event", { singleEvent });
  })
  // eventsApi.getOneEvent(req.params.eventId).then(singleEvent => {
  //     res.send(singleEvent)
  //   })
})


eventsRouter.post("/", function(req, res){
    eventsApi.addEvent(req.body).then((newEvent) => {
    // res.send(newEntry)
    console.log(newEvent)
      res.redirect("/events")
    })
})

eventsRouter.put("/:moveId", function(req,res){
    eventsApi.updateEvent(req.params.moveId, req.body).then(() => {
    res.redirect("/events")
    })

    // eventsApi.updateAnimalMove().then(() => {
    //   res.send("/");
    // })
})


eventsRouter.delete("/:moveId", function(req,res){
    eventsApi.deleteEvent(req.params.moveId).then(() => {
    res.redirect("/events")
  })
})

// Step 5: Export the router from the file.
module.exports = {
  eventsRouter
}

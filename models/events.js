const mongoose = require("./connection.js")

//The following code lists all the events that are scehduled to occur

const eventsSchema = mongoose.Schema(
    {
      //make sure String, Number and Boolean are capitalized 
      date: String,
      type: String,
      attendees: Number,
      title: String,
      description: String,
      location: String,
      staff: Number,
    }
)

const eventsCollection = mongoose.model("events", eventsSchema)

const exampleEvent = () => {
    //note: the .create is a Promise
  return eventsCollection.create({
        date: "2019-10-17",
        type: "Wedding",
        attendees: 124,
        title: "Whitley and Dwayne's Wedding",
        description: "Hillman's finest are getting hitched!",
        location: "Pacific Ballroom",
        staff: 25,
  })
}

//retrieve all events from database
const getEvents = () => {
    return eventsCollection.find()
    //note: the .find is a Promise
}

//retrieve a single event from the database
const getOneEvent = (eventId) => {
    return eventsCollection.findById(eventId)
    //note: the .findById is a Promise
}

//add new event to the database
const addEvent = (newEvent) => {
    console.log(newEvent)
   return eventsCollection.create(newEvent)
}

//update event with eventId to updatedEvent
const updateEvent = (eventId, updatedEvent) => {
    return eventsCollection.findByIdAndUpdate(eventId, updatedEvent)
}

//deletes event with eventId from database
const deleteEvent = (eventId) => {
    return eventsCollection.findByIdAndDelete(eventId);
}

module.exports = {
    exampleEvent, 
    getEvents,
    getOneEvent,
    addEvent,
    updateEvent,
    deleteEvent
}
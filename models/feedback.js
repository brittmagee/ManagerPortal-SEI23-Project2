const mongoose = require("./connection.js")

//The following code lists manager feedback to staff and directors

const feedbackSchema = mongoose.Schema(
    {
      //make sure String, Number and Boolean are capitalized 
      date: String,
      type: String,
      title: String,
      description: String,
      staff: Number,
      status: String,
      priority: String,
    }
)

const feedbackCollection = mongoose.model("feedback", feedbackSchema)

const exampleFeedback = () => {
    //note: the .create is a Promise
  return feedbackCollection.create({
        date: "2019-08-28",
        type: "Exhibit",
        title: "Dolphin Veterinary Exam",
        description: "Follwing the birth of Misty's calf, Dr. Greg Bossart recommend doubling Misty's food protions to ensure consistent lactation.",
        staff: 2,
        status: "In Progress",
        priority: "P1",
  })
}

//retrieve all feedback from database
const getFeedback = () => {
    return feedbackCollection.find()
    //note: the .find is a Promise
}

//retrieve one feedback from the database
const getOneFeedback = (feedbackId) => {
    return feedbackCollection.findById(feedbackId)
    //note: the .findById is a Promise
}

//add new feedback to the database
const addFeedback = (newFeedback) => {
    console.log(newFeedback)
   return feedbackCollection.create(newFeedback)
}

//update feedback with feedbackId to updatedFeedback
const updateFeedback = (feedbackId, updatedFeedback) => {
    return feedbackCollection.findByIdAndUpdate(feedbackId, updatedFeedback)
}

//deletes event with eventId from database
const deleteFeedback = (feedbackId) => {
    return feedbackCollection.findByIdAndDelete(feedbackId);
}

module.exports = {
    exampleFeedback,
    getFeedback,
    getOneFeedback,
    addFeedback,
    updateFeedback,
    deleteFeedback
}
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require ('morgan');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
// Use morgan logger for logging requests
app.use(logger("dev"));
// parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Require all models
var db = require("./models");

mongoose.connect("mongodb://localhost/WalkSpace", { useNewUrlParser: true })

// Define API routes here

// Route for getting clients
app.get("/Clients", function(req, res){
    db.Client.find({})
      .then(function(dbClient){
        // success
        res.json(dbClient);
      })
      .catch(function(err){
        // error
        res.json(err);
      })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

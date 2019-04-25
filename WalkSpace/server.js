const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require('morgan');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const secret = process.env.SECRET || "secret";
const users = require("./routes/api/users");
// const router= require("./routes/router")
require("dotenv").config();

// Define middleware here
// Use morgan logger for logging requests
app.use(logger("dev"));
// body-parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Require all models
var db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/WalkSpace", { useNewUrlParser: true })

// API routes
app.use("/api/users", users);
// app.use("/router", router);

// Route for getting clients
app.get("/Clients", function (req, res) {
  db.Client.find({})
    .then(function (dbClient) {
      // success
      res.json(dbClient);
      console.log(dbClient);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
// Routes for getting one client
app.get("/Clients?name", function (req, res) {
  db.Client.findOne({ name: req.param.name })
    .then(function (dbClient) {
      // success
      res.json(dbClient);
      console.log(dbClient);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
app.get("/Clients/:email", function (req, res) {
  var query = req.params.email;
  db.Client.findOne({ email: query })
    .then(function (dbClient) {
      // success
      res.json(dbClient);
      console.log(dbClient);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
// Routes for getting employees
app.get("/Employees", function (req, res) {
  db.Employee.find({})
    .then(function (dbEmployee) {
      // success
      res.json(dbEmployee);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
app.get("/Employees/:email", function (req, res) {
  var query = req.params.email;
  db.Employee.findOne({ email: query })
    .then(function (dbEmployee) {
      // success
      res.json(dbEmployee);
      console.log(dbEmployee);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
// Routes for getting visits
// all visits
app.get("/Visits", function (req, res) {
  db.Visit.find({})
    .then(function (dbEmployee) {
      // success
      res.json(dbEmployee);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
// *one* user's visits for *one* day
app.get("/Visits?date=value1&key2=value2", function (req, res) {
  const queryDate = req.query.date;
  // TODO- figure out how to set key2 with a variable! is it just req.key2?
  const userField = req.key2;
  const queryUser = req.query.key2;
  // userType will set to either client or employee field, depending on which is using app
  db.Visit.find({ date:queryDate, [userField]: queryUser }, function (err, visits) {
    if (err) {
      res.send(err);
    }
    console.log(visits);
    res.json(visits);
  });
}); 
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

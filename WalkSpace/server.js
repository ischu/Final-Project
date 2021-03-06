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
// fixes a depreciation error
mongoose.set('useFindAndModify', false);
// for debugging
mongoose.set('debug', true);
// mongodb://heroku_zk4ms2fz:7ekgb9vev1t97ftjjhln24q0vp@ds155263.mlab.com:55263/heroku_zk4ms2fz
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
    .then(function (dbVisits) {
      // success
      res.json(dbVisits);
    })
    .catch(function (err) {
      // error
      res.json(err);
    })
});
// *one* user's visits for *one* day
app.get("/UserVisitsOnDate", function (req, res) {
  // convert query into Date Obj.
  // const dateToFind = new Date(req.query.date);
  // populate client and employee fields with their matching docs
  const popEmployeeAndClient = [{ path: "employee", model: db.Employee }, { path: "client", model: db.Client }];
  // regex will match date even if it includes hours, minutes, etc.
  const regex = new RegExp("^" + req.query.date + ".*$");
  // sets "find-key" to client if searching for client, employee if searching for employee
  if (req.query.employee) {
    var user = "employee"
  }
  if (req.query.client) {
    var user = "client"
  }
  db.Visit.find({ [user]: { _id: req.query[user] }, 'date': { $regex: regex } }, function (err, visits) {
    if (err) {
      res.send(err);
    }
    console.log(visits);
    res.json(visits);
  }).populate(popEmployeeAndClient).sort({ 'timeBlock': 1, '_id' : 1 });
});
// route for marking arrival
app.put("/VisitArrive/:id", function (req, res) {
  const queryId = req.params.id;
  db.Visit.findOneAndUpdate(
    { _id: queryId },
    {
      arrive: {
        status: true, timestamp: Date.now()
      }
    }
    , { new: true },
    (err, doc) => {
      if (err) return res.res.status(500).send({ error: err });
      console.log(doc);
      return res.send("succesfully updated arrive")
    }
  )
});
// route for marking complete
app.put("/VisitComplete/:id", function (req, res) {
  const queryId = req.params.id;
  db.Visit.findOneAndUpdate(
    { _id: queryId },
    {
      complete: {
        status: true, timestamp: Date.now()
      }
    }
    , { new: true },
    (err, doc) => {
      if (err) return res.res.status(500).send({ error: err });
      console.log(doc);
      return res.send("succesfully updated complete")
    }
  )
});
// route for cancelling visit
app.put("/VisitCancel/:id", function (req, res) {
  const queryId = req.params.id;
  db.Visit.findOneAndUpdate(
    { _id: queryId },
    {
      cancel: {
        status: true, timestamp: Date.now()
      }
    }
    , { new: true },
    (err, doc) => {
      if (err) return res.res.status(500).send({ error: err });
      console.log(doc);
      return res.send(`succesfully updated cancel`)
    }
  )
});
// route for Marking visit arrive, complete, or cancel
// combination of three routes above
app.put("/MarkVisit", function (req, res) {
  // id of visit to update
  const queryId = req.query.id;
  // field to update (arrive, complete, or cancel)
  const queryField = req.query.field;
  const currentTime = new Date();
  db.Visit.findOneAndUpdate(
    { _id: queryId },
    {
      $set: {
        [queryField]: {
          status: true, timestamp: currentTime
        }
      }
    }
    , { new: true },
    (err, doc) => {
      if (err) { return res.status(500).send({ error: err }) }
      else {
        return res.send(`succesfully updated ${queryField}`)
      }
    }
  )
});
// reset visits (for testing purposes)
app.put("/ResetVisit", function (req, res) {
  const queryId = req.query.id;
  const queryField = req.query.field;
  db.Visit.findOneAndUpdate(
    { _id: queryId },
    {
      [queryField]: {
        status: false, timestamp: null
      }
    }
    , { new: true },
    (err, doc) => {
      if (err) return res.res.status(500).send({ error: err });
      console.log(doc);
      return res.send(`succesfully reset ${queryField}`)
    }
  )
});
// for resetting demo
app.put("/ResetAll", function (req, res) {
  db.Visit.updateMany(
    {},
    {
      $set:
      {
        arrive: {
          status: false, timestamp: null
        },
        complete: {
          status: false, timestamp: null
        },
        cancel: {
          status: false, timestamp: null
        }
      }
    }
    , { new: true },
    (err, doc) => {
      if (err) return res.res.status(500).send({ error: err });
      console.log(doc);
      return res.send(`succesfully reset all visits`)
    }
  )
})
// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

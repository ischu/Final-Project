const router = require("express").Router();
const controller = require("./controller");

// Matches with ""
router.route("/")
  .get(controller.findAllClients)

module.exports = router;

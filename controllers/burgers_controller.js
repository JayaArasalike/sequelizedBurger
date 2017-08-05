var express = require("express");

//var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

module.exports = function(app) {

// Create all our routes and set up logic within those routes where required.
// GET route for getting all burgers
app.get("/", function(req, res) {
  let query = {}
  console.log(db.burger);
  db.burger.findAll({
    //where: query
  }).then(function(data) {
    var hbsObject = {
      burger: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST route for saving a new burger
app.post("/", function(req, res) {
  //console.log(req.body);
  db.burger.create(
    //burger_name: req.body.name
    req.body
  ).then(function(){
    res.redirect("/");
  });
    
});

//PUT route for updating a burger
app.put("/:id", function(req, res) {
  //var condition = "id = " + req.params.id;

  //console.log("condition", condition);

  db.burger.update({
    devoured: true
  }, {
        where: {
        id: req.params.id
      }
    }).then(function(data) {
    res.redirect("/");
  });
});

//DELETE route for deleting a burger
app.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  db.burger.destroy(condition, function() {
    res.redirect("/");
  });
});

}
// Export routes for server.js to use.
//module.exports = router;

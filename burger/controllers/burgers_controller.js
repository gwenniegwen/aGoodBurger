var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (results) {

    res.render("index", { burgers: results })
    
  })
})

router.post("/burger", function (req, res) {
  burger.create(req.body.burger_name, function (results) {

    res.redirect("/")
  })
})

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // console.log(req)
  // console.log(res)
  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.delete("/api/burger/:id", function (req, res) {
  var condition = "id=" + req.params.id;
  console.log( condition)
  console.log(id)
  
  burger.delete( condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
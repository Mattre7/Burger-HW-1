var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");


router.get("/", function(req, res){
	burgers.selectAll(function(data){
		var burgerdata = {
			burgers: data
		};
		console.log(burgerdata);
		res.render("index", burgerdata);
	});
});


router.post("/burgers/create", function(req, res){
	burgers.insertOne(req.body.burgername, function(data){
		res.redirect("/");
		console.log("Created a new item")
	});
});

router.put("/burgers/update/:id", function(req, res){
    var condition = "id = " + req.body.id;
    console.log("condition", condition);
	burgers.updateOne(req.body.id, function(data){
		res.redirect("/")
	});
});
module.exports = router;
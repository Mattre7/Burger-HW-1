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
	burgers.create([
		"burgername"
		],[
			req.body.burgername
			], function(data){
				res.redirect("/burgers");
			});
});
router.put("/burgers/update/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
	burgers.update({
		devoured: req.body.devoured
	}, condition, function(data){
		res.redirect("/burgers")
	});
});
module.exports = router;
const Tutorial = require("../modules/tutorialModel.js");
const {} = require("express");

//Create and save a new Tutorial
exports.create = (req, res) => {
    //Validation
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    //Create Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published || false
    });
    //Save tutorial in database
    Tutorial.create(tutorial, (err, date) => {
        if(err)
        res.status(500).send({
            message: err.message || "Some error occured while creating the Tutorial."
        });
        else res.send(data);
    });
};

//Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;
    Tutorial.getAll(title, (err, data) => {
        if (err) 
            res.status(500).send({
                message: err.message || "Some error occured while retrieving tutorials."
            });
        else res.send(data);
    });
};
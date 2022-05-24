const Tutorial = require("../modules/tutorialModel.js");
const {} = require("express");

//Create and save a new Tutorial
exports.create = (req, res) => {

}

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
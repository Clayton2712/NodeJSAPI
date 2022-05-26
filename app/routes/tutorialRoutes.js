module.exports = app => {
    const tutorials = require("../controllers/tutorialController.js");
    var router = require("express").Router();

    //Create new Tutorial (Sample Data)
    router.post("/", tutorials.create);

    //Retrieve all Tutorials (Sample Data)
    router.get("/", tutorials.findAll);

    //Update a tutorial with id
    router.put("/:id", tutorials.update);

    //Retrieve a single tutorial with id
    router.get("/:id", tutorials.findOne);

    app.use('/api/tutorials', router);
    
};
module.exports = app => {
    const tutorials = require("../controllers/tutorialController.js");
    var router = reqiure("express").Router();

    //Create new Tutorial (Sample Data)
    //router.post("/", tutorials.create);

    //Retrieve all Tutorials (Sample Data)
    router.get("/", tutorials.findAll);

    app.use('/api/tutorials', router);
    
};
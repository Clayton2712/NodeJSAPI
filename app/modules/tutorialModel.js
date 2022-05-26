const { query } = require("express");
const sql = require("./db.js");

//constructor
const Tutorial = function (tutorial) {
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
};

Tutorial.create = (newTutorial, result) => {
    sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
        if(err) {
            console.log("error ", err);
            result(err, null);
            return;
        }
        console.log("created tutorial: ", {id: res.insertId, ...newTutorial});
        result(null, {id: res.insertId, ...newTutorial});
    });
};

Tutorial.getAll = (title, result) => {
    let query = "SELECT * FROM tutorials";
    if (title) {
        query += `WHERE title LIKE '%${title}%' `;
    }
    sql.query(query, (err, res) => {
        if(err) {
            console.log("error", err);
            result(null, err);
            return;
        }
        console.log("tutorials", res);
        result(null, res);
    });
};

Tutorial.updateById = (id, tutorial, result) => {
    sql.query(
        "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
        [tutorial.title, tutorial.description, tutorial.published, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                //Not found Tutorial with the ID
                result({ kind: "not_found"}, null);
                return;
            }
            console.log("Updated tutorial: ", {id: id, ...tutorial});
            result(null, {id: id, ...tutorial});
        }
    );
};

module.exports = Tutorial;
var router = require("express").Router();
router.route("/schools/:id?").get(getSchools).post(addSchool).delete(deleteSchool);

function getSchools(req, res) {
    var schools = [{ name: "Syed1", tagline:"Syed One" },
                    { name: "Syed2",tagline:"Syed Two" },
                    { name: "Syed3", tagline:"Syed Three" }];
    res.json(schools);
}

function addSchool(req, res) {
  var schools = [{ name: "Syed1", tagline:"Syed One" },
                  { name: "Syed2",tagline:"Syed Two" },
                  { name: "Syed3", tagline:"Syed Three" }];
  res.json(schools);
}

function deleteSchool(req, res) {
  var schools = [{ name: "Syed1", tagline:"Syed One" },
                  { name: "Syed2",tagline:"Syed Two" },
                  { name: "Syed3", tagline:"Syed Three" }];
  res.json(schools);
}

module.exports = router;

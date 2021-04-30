const router = require("express").Router();

const { getAll } = require("../controllers/skillsController");

router.get("/", getAll);

module.exports = router;

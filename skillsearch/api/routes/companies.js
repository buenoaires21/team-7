const router = require("express").Router();

const { getAll } = require("../controllers/companiesController");

router.get("/", getAll);

module.exports = router;

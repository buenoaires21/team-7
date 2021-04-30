const router = require("express").Router();
const skills = require("./skills");
const areas = require("./areas");
const companies = require("./companies");
const form = require("./form");

router.use("/skills", skills);
router.use("/companies", companies);
router.use("/areas", areas);
router.use("/form", form);

module.exports = router;

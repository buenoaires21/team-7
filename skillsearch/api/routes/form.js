const router = require("express").Router();

const { newForm, getForms } = require("../controllers/formController");

router.post("/", newForm);
// router.get("/", getForms);

module.exports = router;

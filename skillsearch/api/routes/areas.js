const router = require('express').Router

const {getAll} = require('../controllers/areasController')


router.get('/', getAll)

module.exports = router
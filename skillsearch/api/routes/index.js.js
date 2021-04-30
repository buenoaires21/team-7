const router = require('express').Router()
const skills = require('./skills')
const areas = require('./areas')
const companies = require('./companies')

router.use('/skills', skills)
router.use('/companies', companies)
router.use('/areas', areas)

module.exports = router
const express = require('express')
const router = express.Router()
const dataController = require('../../controllers/api/contact')

// POST /api/contact
router.post('/contact', dataController.contactForm)

module.export = router

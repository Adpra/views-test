const express = require('express');

const router = express.Router();

const fabelioController = require('../controllers/fabelio');


router.post('/post', fabelioController.createData)
router.get('/posts', fabelioController.getAllData)
router.get('/post/:id', fabelioController.getById)


module.exports = router;
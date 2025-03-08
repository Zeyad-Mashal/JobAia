const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {ViewApplication , CreateApplication} = require("./Controller/Application.controller");



router.get('/application',ViewApplication);

router.post('/application', upload.single("CV") , CreateApplication );


module.exports = router;
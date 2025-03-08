const express = require("express");
const router = express.Router();
const {PostComment , GetComments} = require("../Feedback/Controller/Feedback.controller");


router.post("/feetback/:id", PostComment);

router.get("/feetback", GetComments);


module.exports = router;
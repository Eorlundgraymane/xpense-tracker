const express = require('express');
const router = express.Router();

const homeContoller = require("../controllers/homeController");

router.use("/", homeContoller.getHomePage);

module.exports = router;
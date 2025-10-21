//Defining Constants
const express = require("express");
const router = express.Router()  



//Routes
router.get("/about",  (req, res) => res.send("<h1>This is the about page</h1>"))





//Export router object
module.exports = router;
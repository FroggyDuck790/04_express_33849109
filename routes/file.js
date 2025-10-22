//Defining Constants
const express = require("express");
const router = express.Router()  



//Routes
router.get("/about",  (req, res) => res.sendFile(`/`))





//Export router object
module.exports = router;
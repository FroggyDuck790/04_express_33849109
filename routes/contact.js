//Defining Constants
const express = require("express");
const router = express.Router()  




//Route
//Using user feedback to customise page
router.get('/contact/:name', (req, res) => 
    res.send(`<h1>Hello ${req.params.name}. This is the contact page</h1>Reach me at jmcgr004@campus.goldsmiths.ac.uk`))




//Export router object
module.exports = router;
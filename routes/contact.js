//Defining Constants
const express = require("express");
const router = express.Router()  



//Routes

router.get('/contact', (req, res) => res.send ('<h1>This is the contact page</h1>Reach me at jmcgr004@campus.goldsmiths.ac.uk'))   





//Export router object
module.exports = router;
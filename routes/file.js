//Defining Constants
const express = require("express");
const router = express.Router()  



//Routes
router.get("/about",  (req, res) => res.sendFile(`./files/file.html`))





//Export router object
module.exports = router;
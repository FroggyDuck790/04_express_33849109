//Defining Constants
const express = require("express");
const router = express.Router()  
const{days && months} = require(./routes/dates) 

const date = new Date()

let day = (date.getDate())
let month = (date.getMonth()) + 1
let year = (date.getFullYear())


//Routes
router.get("/",  (req, res) => res.send("Hello World!"))
router.get("/about",  (req, res) => res.send("<h1>This is the about page</h1>"))
router.get('/contact', (req, res) => res.send ('<h1>This is the contact page</h1>Reach me at jmcgr004@campus.goldsmiths.ac.uk'))   




//Export router object
module.exports = router;
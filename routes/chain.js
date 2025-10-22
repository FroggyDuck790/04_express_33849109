//Defining Constants
const express = require("express");
const router = express.Router()  

const cb1 = function (req, res, next) {
    console.log(`50% Loaded`)
    next()
}

const cb2 = function (req, res, next) {
    console.log(`99% Loaded`)
    next()
}

//Routes
router.get("/chain/:b", [cb1, cb2], (req, res, next) =>  {
    console.log("Loaded")
    next()
    }, (req, res) => {
        res.send(`Hello ${req.params.b}`)
    }
)




//Export router object
module.exports = router;
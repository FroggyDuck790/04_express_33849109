// Express Set-Up

const express = require("express"); 
const app = express(); 
const port = 7999;

 


// Route Handling

const mainRoute = require("./routes/main");
app.use('/', mainRoute)
const aboutRoute = require("./routes/about");
app.use('/', aboutRoute)
const contactRoute = require("./routes/contact");
app.use('/', contactRoute)
const dateRoute = require("./routes/dates.js");
app.use('/', dateRoute)



// HTTP Requests

app.listen(port,  
    () => console.log(`Node server is running on port ${port}...`));  


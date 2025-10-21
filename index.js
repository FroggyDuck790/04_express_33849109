// Express Set-Up

const express = require("express"); 
const app = express(); 
const port = 7999;

 


// Route Handling

const mainRoutes = require("./routes/main");
app.use('/', mainRoutes)
const dateRoutes = require("./routes/dates.js");
app.use('/', dateRoutes)



// HTTP Requests

app.listen(port,  
    () => console.log(`Node server is running on port ${port}...`));  


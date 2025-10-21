// Express Set-Up

const express = require("express"); 
const app = express(); 
const port = 7999;

 


// Route Handling

const mainRoutes = require("./routes/main");
app.use('/', mainRoute)
const aboutRoutes = require("./routes/about");
app.use('/', aboutRoute)
const contactRoutes = require("./routes/contact");
app.use('/', contactRoute)
const dateRoutes = require("./routes/dates.js");
app.use('/', dateRoute)



// HTTP Requests

app.listen(port,  
    () => console.log(`Node server is running on port ${port}...`));  


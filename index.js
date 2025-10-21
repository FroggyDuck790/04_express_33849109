// Express Set-Up

const express = require("express"); 
const app = express(); 
const port = 7999;

 


// Route Handling

const mainRoutes = require("./routes/main" && "./routes/dates");
app.use('/', mainRoutes)




// HTTP Requests

app.listen(port,  
    () => console.log(`Node server is running on port ${port}...`));  


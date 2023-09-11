const express = require("express");
const app = express();


// must have this line at the top to access .env file
require('dotenv').config();
const port = process.env.PORT;


app.use(express.json(), express.urlencoded({ extended: true }));

// this line adds in the whole mongoose.config.js file to connect server to the db in Atlas
require("./config/mongoose.config");

// const routes = require("./routes/jokes.routes");
// routes(app);

require("./routes/jokes.routes")(app);

// this needs to be below the other code blocks
app.listen( port, () => console.log(`✨ ✨ ✨ Server up on port: ${port}`) );







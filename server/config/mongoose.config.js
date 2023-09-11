// import the mongoose library 
const mongoose = require('mongoose');

// extract vars from .env
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// mongodb+srv://nkaurme:<password>@cluster.q9g2n3p.mongodb.net/
const uri = `mongodb+srv://${username}:${pw}@cluster.q9g2n3p.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("🎉 🎉 🎉 Established a connection to the database"))
    .catch(err => console.log("❌ ❌ ❌ Something went wrong when connecting to the database", err));

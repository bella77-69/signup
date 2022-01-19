const express = require('express')
const dotenv = require('dotenv')

//local env vars
dotenv.config({path:'./config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`));

app.get('/', (req, res) => {
    res.status(200).json({success:true,meg: "Show all users"});
});
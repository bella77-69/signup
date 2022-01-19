const express = require('express')
const dotenv = require('dotenv')

//local env vars
dotenv.config({path:'./config/config.env'});

const app = express();


const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.priginalUrl}`)
    next();
}
app.use(logger)

app.get('/', (req, res) => {
    res.status(200).json({success: true, msg: "Show all users"});
});

app.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: "Create new user"});
});

app.post('/', (req, res) => {
    res.status(200).json({success: true, msg: `Update user ${req.params.id}`});
});

app.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update user ${req.params.id}`});
});

app.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete user ${req.params.id}`});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
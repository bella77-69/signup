const User = require ('../models/User')

exports.register = async(req, res, next) => {
    const { firstName, lastName, password, email} = req.body;

    //create user

    const user = await User.create({
        firstName, lastName, password, email
    })
    res.status(200).json({success: true, token, id})
}
exports.getUsers = (req, res, next) => {
    res.status(200).json({success: true, msg: "show all users"});
}

exports.getUser = (req, res, next) => {
    res.status(200).json({success: true, msg: `show user ${req.params.id}`});
}

exports.createUser = (req, res, next) => {
    res.status(200).json({success: true, msg: "Create new user"});
}

exports.updateUser = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update user ${req.params.id}`});
}

exports.deleteUser = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete user ${req.params.id}`});
}
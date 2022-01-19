const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');

const UserSchema = {
    firstName: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        required: true,
    },
}

const UserSchema = mongoose.model("user", UserSchema);

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
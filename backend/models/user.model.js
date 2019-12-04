const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
      },
    password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
        function(input) {
        return input.length >= 6;
        },
        "Password should be longer."
    ]
    }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
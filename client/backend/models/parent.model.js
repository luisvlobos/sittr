const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parentSchema = new Schema({
    fullName: {
        type: String, 
        required: true
    },
    requirements: {
        type: String
      },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    zip: {
        type: Number
    }
});

const Parent = mongoose.model('Parents', parentSchema);

module.exports = Parent;
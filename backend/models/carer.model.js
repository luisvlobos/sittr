const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carerSchema = new Schema({
    fullName: {
        type: String, 
        required: true
    },
    qualifications: {
        type: String
    },
    rate: {
        type: String
    },
    zip: {
        type: Number
    }
});

const Carer = mongoose.model('Carers', carerSchema);

module.exports = Carer;
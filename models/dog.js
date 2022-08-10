const mongoose = require('mongoose');
const dogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String,
    },
    breed: {
        type: String
    },
    age: {
        type: String
    }

});

const dog = new mongoose.model('dogs', dogSchema);
module.exports = dog;
const { Schema, model } = require('mongoose');

const someItemSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const someItem = model('someitem', someItemSchema);

module.exports = someItem;
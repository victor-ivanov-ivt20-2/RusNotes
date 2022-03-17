const { Schema, model } = require('mongoose');

const someItemSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    ij: [Number],
    oe: Number
})

const someItem = model('someitem', someItemSchema);

module.exports = someItem;
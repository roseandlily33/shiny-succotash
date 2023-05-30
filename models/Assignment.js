const {Schema, Types} = require('mongoose');

const assignmentSchema = new Schema (
    {
        assignmentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        assignmentName: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 40,
            defualt: 'Unamed'
        },
        score: {
            type: Number, 
            required: true,
            default: () => Math.floor(Math.random()* (100-7- + 1) + 70),
        },
        createdAt: {
            type: Date,
            default: new Date.now()
        },
    }, {
        toJSON: {
            getters: true,
        }, id: false
    }
);

module.exports = assignmentSchema;
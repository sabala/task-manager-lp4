var mongoose = require('mongoose');

var task = new mongoose.Schema({
    tarefa: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now,
        required: true
    },
    prioridade: {
        type: String,
        required: true
    },
    feita: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Tarefa', task);
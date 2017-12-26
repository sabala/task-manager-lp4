var mongoose = require('mongoose');

var task = new mongoose.Schema({
    tarefa: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    data: {
        type: Date,
        default: Date.now,
        required: true
    },
    prioridade: {
        type: Number,
        required: true
    },
    feita: {
        type: Boolean
    }
});

module.exports = mongoose.model('Tarefa', task);
var Task = require('../models/tasks');

module.exports.buscaTodas = function (req, res) {
    Task.find({
            'feita': {
                $ne: true
            }
        }).sort({
            data: 1,
            prioridade: 1
        }).exec()
        .then(
            function (tasks) {
                res.json(tasks);
            },
            function (error) {
                res.status(500).json(error);
            });
};

module.exports.tarefasCompletas = function (req, res) {
    Task.find({
            'feita': {
                $ne: false
            }
        }).exec()
        .then(
            function (tasks) {
                res.json(tasks);
            },
            function (error) {
                res.status(500).json(error);
            });
};

module.exports.adicionarNova = function (req, res) {
    Task.create(req.body)
        .then(
            function (task) {
                res.json(task);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
};

module.exports.completarTarefa = function (req, res) {
    var feit = req.params.feita;
    Task.update({
            'feita': feit
        }, {
            $set: {
                'feita': true
            }
        }).exec()
        .then(
            function (task) {
                res.json(task);
            },
            function (erro) {
                return console.error(erro);
            }
        );
};


/*module.exports.editarTarefa = function (req, res) {
    Task.findById({
        '_id': id
    }).exec()
    .then(
        function (tasks) {
            res.json(tasks);
        },
        function (error) {
            res.status(500).json(error);
        });
};

module.exports.atualizarTarefa = function (req, res){
    var tarefaDados = req.body;
    var _id = req.params.id;
    Task.update({"_id" : id}, tarefaDados, {upsert: true}).exec()
    .then( function (tasks) {
        res.json(tasks);
    },
    function (error) {
        res.status(500).json(error);
    });
};*/

module.exports.excluirTarefa = function (req, res) {
    var _id = req.params.id;
    Task.remove({
            "_id": _id
        }).exec()
        .then(
            function () {
                res.status(204).end();
            },
            function (erro) {
                return console.error(erro);
            }
        );
};
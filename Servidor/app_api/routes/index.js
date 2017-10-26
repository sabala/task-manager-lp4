var express = require('express');
var router = express.Router();
var taskController = require('../controllers/task');

// GET
router.get('/tasks', taskController.buscaTodas);
router.get('/tasks/tarefasCompletas', taskController.tarefasCompletas);
router.get('/tasks/:id', taskController.editarTarefa);
// POST
router.post('/tasks', taskController.adicionarNova);
// PUT
router.put('/tasks/:id', taskController.atualizarTarefa);
router.put('/tasks/completarTarefa/:feita', taskController.completarTarefa);
// DELETE
router.delete('/tasks/:id', taskController.excluirTarefa);

module.exports = router;
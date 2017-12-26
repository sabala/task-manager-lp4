var express = require('express');
var router = express.Router();
var taskController = require('../controllers/task');

// GET
router.get('/tarefas', taskController.buscaTodas);
router.get('/tarefas/tarefasCompletas', taskController.tarefasCompletas);
//router.get('/tarefas/:id', taskController.editarTarefa);
// POST
router.post('/tarefas', taskController.adicionarNova);
// PUT
//router.put('/tarefas/:id', taskController.atualizarTarefa);
router.put('/tarefas/completarTarefa/:feita', taskController.completarTarefa);
// DELETE
router.delete('/tarefas/:id', taskController.excluirTarefa);

module.exports = router;
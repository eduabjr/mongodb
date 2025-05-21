const express = require('express');
const router = express.Router();
const Tarefa = require('../models/Tarefa');

// POST
router.post('/', async (req, res) => {
  try {
    const tarefa = new Tarefa(req.body);
    const salva = await tarefa.save();
    res.status(201).json(salva);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar tarefa', detalhes: err.message });
  }
});

// GET
router.get('/', async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar tarefas', detalhes: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const atualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizada) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(atualizada);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar tarefa', detalhes: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletada = await Tarefa.findByIdAndDelete(req.params.id);
    if (!deletada) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json({ mensagem: 'Tarefa deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar tarefa', detalhes: err.message });
  }
});

module.exports = router;

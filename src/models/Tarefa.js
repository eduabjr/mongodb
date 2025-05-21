const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  status: {
    type: String,
    enum: ['pendente', 'em andamento', 'concluída'],
    default: 'pendente'
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tarefa', TarefaSchema);

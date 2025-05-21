const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Lê o .env
const connectDB = require('./config/database'); // Importa a função de conexão

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Rota teste
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

const tarefasRoutes = require('./routes/tarefas');
app.use('/tarefas', tarefasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

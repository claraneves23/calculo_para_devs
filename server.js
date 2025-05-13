require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const questoesRoutes = require('./routes/questoes');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar:", err));

// Rotas
app.use('/questoes', questoesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

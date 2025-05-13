const mongoose = require('mongoose');

const questaoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  enunciado: { type: String, required: true },
  resposta: String,
  alternativas: [String]
});

module.exports = mongoose.model('Questao', questaoSchema);

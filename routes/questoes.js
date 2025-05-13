const express = require('express');
const router = express.Router();
const Questao = require('../models/Questao');

// Criar questão
router.post('/', async (req, res) => {
  try {
    const questao = new Questao(req.body);
    const salva = await questao.save();
    res.status(201).json(salva);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// Listar questões
router.get('/', async (req, res) => {
  try {
    const questoes = await Questao.find();
    res.json(questoes);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;

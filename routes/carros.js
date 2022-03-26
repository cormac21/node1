let express = require('express');
let router = express.Router();
let {Carro} = require('../model/Carro');

var carros = []

router.post('/', function (req, res, next) {
  if(!req.body || !req.body.placa || !req.body.renavam ) {
    res.status(400).json({code: 400, erro: "Deu ruim!"});
  }

  const car = Carro.copy(req.body);
  carros.push(car);
  return res.status(201).json(car);
});

router.get('/', function (req, res, next) {
  return res.json(carros);
});

router.get('/:placa', function(req, res, next) {
  if(!req.params.placa) {
    return res.status(400).json({code: 400, erro: "Deu ruim!"});
  }
  const placa = req.params.placa;
  const resultado = carros.filter(c => c.placa === placa);
  return res.json(resultado);
});

module.exports = router;

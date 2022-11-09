const express = require('express');
const ventas = require('../models/ventas');
const router = express.Router();

const Ventas = require('../models/ventas');

//metodo para consultar ventas
router.get('/', async (req, res) => {
    const ventas = await Ventas.find();
    res.json(ventas);

});

// metodo para consultar por una venta en especifico a través de su id

router.get('/:id', async(req, res) => {
    const venta = await Ventas.findById(req.params.id);
    res.json(venta);
})

//metodo get venta en especifico
router.post('/', async (req, res) => {
    const {fecha, idCliente, idVenta, valor, confirmado} = req.body;
    const ventas = new Ventas({fecha, idCliente, idVenta, valor, confirmado});
    await ventas.save();
    res.json({status: 'venta guardada'});
});

//metodo para actualizar
router.put('/:id', async (req, res) => {
    const {fecha, idCliente, idVenta, valor, confirmado} = req.body;
    const newVenta = {fecha, idCliente, idVenta, valor, confirmado};
    await Ventas.findByIdAndUpdate(req.params.id, newVenta);
    res.json({status: 'Venta editada'});
});

//metodo eliminar

router.delete('/:id', async(req, res) => {
    await Ventas.findByIdAndRemove(req.params.id);
    res.json({status: 'Venta Eliminada'});
});

module.exports = router;

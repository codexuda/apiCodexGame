const { json } = require('express');
const express = require('express');
const router = express.Router();

const Clientes = require('../models/clientes');

//Metodo consultar clientes
router.get('/', async (req, res) => {
    const clientes = await Clientes.find();
        console.log(clientes);
        res.json(clientes);
});

//Metodo consultar por un cliente
router.get('/:id', async (req, res) =>{
    const cliente = await Clientes.findById(req.params.id);
    res.json(cliente);
});

//Metodo agregar clientes
router.post('/', async (req, res) => {
    const { identificacion, apellido, edad, direccion, telefono, nombre, correo} = req.body;
    const clientes = new Clientes({identificacion, apellido, edad,direccion,telefono, nombre, correo});
    await clientes.save();
    res.json({status:'Cliente Creado'});
}); 

//Editar un cliente
router.put('/:id', async (req, res) => {
    const { identificacion, apellido, edad, direccion, telefono, nombre, correo} = req.body;
    const newCliente = { identificacion, apellido, edad,direccion,telefono, nombre, correo};
    await Clientes.findByIdAndUpdate(req.params.id, newCliente);
    res.json({status: 'Cliente editado'});
});

// Eliminar un cliente
router.delete('/:id', async (req, res) => {
    await Clientes.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente eliminado'});
});

module.exports = router;

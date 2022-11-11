const express = require('express');
const router = express.Router();

const Productos = require('../models/productos');

//inicio  de crud
//metodo para mostrar o read los productos
router.get('/', async (req, res) => {

    const productos = await Productos.find();
    console.log(productos);
    res.json(productos);
});

//metodo get tarea en especifico
router.get('/:id', async (req, res) => {
    const producto = await Productos.findById(req.params.id);
    res.json(producto);
})

 
//metodo post
router.post('/', async (req, res) => {
    const { id, urlImagen, nombre, descripcion, características, precio } = req.body;
    const productos = new Productos({ id, urlImagen, nombre, descripcion, características, precio });
    await productos.save();
    res.json({ status: 'Producto guardado' });
});

//metodo put

router.put('/:id', async(req, res) => {
    const { id, urlImagen, nombre, descripcion, características, precio } = req.body;
    const newProducto = { id, urlImagen, nombre, descripcion, características, precio };
    await Productos.findByIdAndUpdate(req.params.id, newProducto);
    res.json({status:'Producto Editado'});
});

//Metodo eliminar
router.delete('/:id', async (req, res) =>{
    await Productos.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});
});


module.exports = router;
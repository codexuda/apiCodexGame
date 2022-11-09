
const mongoose = require('mongoose');
const {Schema} = mongoose;

const productosSchema = new Schema({
    id: { type: String, required: true },
    urlImagen: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    características: { type: String, required: true },
    precio: { type: Number, required: true }
});

module.exports = mongoose.model('productos', productosSchema);
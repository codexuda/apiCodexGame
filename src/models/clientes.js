
const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientesSchema = new Schema({
    identificacion: {type: String, required: true},
    apellido:{type: String, required: true},
    edad:{type: Number, required: true},
    nombre:{type: String, required: true},
    correo:{type: String, required: true},
    telefono:{type: Array, required: true}


});
module.exports = mongoose.model('clientes', clientesSchema);
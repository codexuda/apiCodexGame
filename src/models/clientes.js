
const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientesSchema = new Schema({
    identificacion: {type: String, required: true},
    apellido:{type: String, required: true},
    edad:{type: Number, required: true},
    direccion: [{type: Object, required: true}],
    telefono: [{type: Object, required: true} ],
    nombre:{type: String, required: true},
    correo:{type: String, required: true},
    

});
module.exports = mongoose.model('clientes', clientesSchema);
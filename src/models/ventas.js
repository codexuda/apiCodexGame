const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = new Schema({
    fecha: {type: Date, require: true},
    idCliente: {type: Number, required: true},
    idVenta: {type: String, required: true},
    valor: {type: Number, required: true},
    confirmado: {type: String, required: true},
    detalleCompra: [{type: Object, required: true}]
    

});

module.exports = mongoose.model('ventas', VentasSchema);

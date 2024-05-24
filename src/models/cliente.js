// /src/models/cliente.js
// Importar mongoose para definir esquema y modelo
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clienteSchema = new Schema({
    _id:{
        type: String,
    },
    CURP: {
        type: String,
        required: true,
        unique: true
    },
    nombreC: {
        type: String,
        required: true
    },
    apellidosC: {
        type: String,
        required: true
    },
    emailC: {
        type: String,
        required: true,
        unique: true
    },
}, 

{
// Configuración de opciones del esquema: timestamps agrega createdAt y updatedAt automáticamente
timestamps: true
});


const Cliente = model('Cliente', clienteSchema);
module.exports = Cliente;
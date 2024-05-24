// /src/models/envio.js
// Importar mongoose para definir esquema y modelo
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const envioSchema = new Schema({
    _id:{
        type: String,
    },
    idE: {
        type: String,
        required: true,
        unique: true
    },
    fechaE: {
        type: String,
        required: true
    },
    origenE: {
        type: String,
        required: true,
        ref: 'Oficina',
    },
    destinoE: {
        type: String,
        required: true,
        ref: 'Oficina',
    },
    tipoE: {
        type: String,
        required: true,
        ref: 'TipoEnvio',
    },
    clienteE: {
        type: String,
        required: true,
        ref: 'Cliente',
    },
    pesoE: {
        type: String,
        required: true,
    },
    dimensionesE: {
        type: String,
        required: true,
    },
    costoTotalE: {
        type: String,
        required: true,
    },
    estatusE: {
        type: String,
        required: true,
    },
}, 

{
// Configuración de opciones del esquema: timestamps agrega createdAt y updatedAt automáticamente
timestamps: true
});


const Envio = model('Envio', envioSchema);
module.exports = Envio;
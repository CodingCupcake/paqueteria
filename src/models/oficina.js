// /src/models/oficina.js
// Importar mongoose para definir esquema y modelo
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const oficinaSchema = new Schema({
    _id:{
        type: String,
    },
    idO: {
        type: String,
        required: true,
        unique: true
        },
    nombreO: {
            type: String,
            required: true
        },
    direccion: {
            calleO: {
                type: String,
                required: true
            },
            numeroO: {
                type: String,
                requred: true
            },
            ciudad: {
                type: String,
                required: true
            },
            cpO: {
                type: String,
                required: true
            },
        },
    telefonoO: {
            type: String,
            required: true,
            unique: true
        },
    emailO: {
            type: String,
            required: true,
            unique: true
        },
}, 

{
// Configuración de opciones del esquema: timestamps agrega createdAt y updatedAt automáticamente
timestamps: true
});


const Oficina = model('Oficina', oficinaSchema);
module.exports = Oficina;
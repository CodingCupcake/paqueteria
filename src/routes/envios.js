// /src/routes/envios.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
    obtenerEnvios,
    crearEnvio,
    obtenerEnvioID,
    actualizarEnvio,
    eliminarEnvio,
    crearq0,
    getQ2,
    getQ3,
    getQ4,
    getQ5,
    getQ6,
    getQ7,
    getQ8
} = require('../controllers/envio'); 
// Ruta para obtener todas las materias
router.get('/', obtenerEnvios);

// Ruta para obtener una materia por su ID
router.get('/:idE', obtenerEnvioID);

// Ruta para crear una nueva materia
router.post('/', crearEnvio);

// Ruta para actualizar una materia por su ID
router.put('/:idE', actualizarEnvio);

// Ruta para eliminar una materia por su ID
router.delete('/:idE', eliminarEnvio);

// Ruta para crear la Q0
router.post('/q0', crearq0);

// Ruta para la Q2
router.get('/q2/:origenE', getQ2)

// Ruta para la Q3
router.get('/q3/:tipoE', getQ3)

// Ruta para la Q4
router.get('/q4/:clienteE', getQ4)

// Ruta para la Q5
router.get('/q5/:origenE', getQ5)

// Ruta para la Q6
router.get('/q6/:estatusE', getQ6)

// Ruta para la Q7
router.get('/q7/:tipoE', getQ7)

// Ruta para la Q8
router.get('/q8/:origenE', getQ8)

module.exports = router;
// /src/routes/tiposEnvios.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
    obtenerTiposE,
    crearTipoE,
    obtenerTipoEID,
    actualizarTipoE,
    eliminarTipoE,
    crearq0
} = require('../controllers/tipoEnvio'); 
// Ruta para obtener todas las materias
router.get('/', obtenerTiposE);

// Ruta para obtener una materia por su ID
router.get('/:idTE', obtenerTipoEID);

// Ruta para crear una nueva materia
router.post('/', crearTipoE);

// Ruta para actualizar una materia por su ID
router.put('/:idTE', actualizarTipoE);

// Ruta para eliminar una materia por su ID
router.delete('/:idTE', eliminarTipoE);

// Ruta para crear la 10
router.post('/q0', crearq0);

module.exports = router;
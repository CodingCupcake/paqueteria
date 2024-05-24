// /src/routes/clientes.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
    obteneroficinas,
    crearoficina,
    obteneroficinaID,
    actualizaroficina,
    eliminaroficina,
    crearq0
} = require('../controllers/oficina'); 
// Ruta para obtener todas las oficinas
router.get('/', obteneroficinas);

// Ruta para obtener una oficina por su ID
router.get('/:idO', obteneroficinaID);

// Ruta para crear una nueva materia
router.post('/', crearoficina);

// Ruta para actualizar una oficina por su ID
router.put('/:idO', actualizaroficina);

// Ruta para eliminar una oficina por su ID
router.delete('/:idO', eliminaroficina);

// Ruta para crear la 10
router.post('/q0', crearq0);

module.exports = router;
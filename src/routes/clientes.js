// /src/routes/clientes.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
    obtenerClientes,
    crearCliente,
    obtenerClienteCURP,
    actualizarCliente,
    eliminarCliente,
    crearq0
} = require('../controllers/cliente'); 
// Ruta para obtener todas las materias
router.get('/', obtenerClientes);

// Ruta para obtener una materia por su ID
router.get('/:CURP', obtenerClienteCURP);

// Ruta para crear una nueva materia
router.post('/', crearCliente);

// Ruta para actualizar una materia por su ID
router.put('/:CURP', actualizarCliente);

// Ruta para eliminar una materia por su ID
router.delete('/:CURP', eliminarCliente);

// Ruta para crear la 10
router.post('/q0', crearq0);

module.exports = router;
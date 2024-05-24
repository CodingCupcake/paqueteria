const Cliente = require('../models/cliente');

const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.body = (clientes);
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearCliente = async (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  try {
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const crearq0 = async (req, res) => {
  try {
    const clienteGuardado = await Cliente.insertMany(req.body);
    res.status(201).json(clienteGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerClienteCURP = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({ CURP: req.params.CURP });
    if (!cliente) {
      return res.status(404).json({ message: 'No se encontró al cliente' });
    }
    res.body = (cliente);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const actualizarCliente = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findOneAndUpdate({ CURP: req.params.CURP }, req.body, {
      new: true
    });
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'No se encontró al cliente' });
    }
    res.status(200).json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findOneAndDelete({ CURP: req.params.CURP });
    if (!cliente) {
      return res.status(404).json({ message: 'No se encontró al cliente' });
    }
    res.status(200).json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  obtenerClientes,
  crearCliente,
  obtenerClienteCURP,
  actualizarCliente,
  eliminarCliente,
  crearq0
};

const Envio = require('../models/envio');

const obtenerEnvios = async (req, res) => {
  try {
    const envios = await Envio.find().populate('origenE').populate('destinoE').populate('tipoE').populate('clienteE');
    res.body = (envios);
    res.status(200).json(envios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearEnvio = async (req, res) => {
  const nuevoEnvio = new Envio(req.body);
  try {
    const envioGuardado = await nuevoEnvio.save();
    res.status(201).json(envioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const crearq0 = async (req, res) => {
  try {
    const envioGuardado = await Envio.insertMany(req.body);
    res.status(201).json(envioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerEnvioID = async (req, res) => {
  try {
    const envio = await Envio.findOne({ idE: req.params.idE }).populate('origenE').populate('destinoE').populate('tipoE').populate('clienteE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const actualizarEnvio = async (req, res) => {
  try {
    const envioActualizado = await Envio.findOneAndUpdate({ idE: req.params.idE }, req.body, {
      new: true
    });
    if (!envioActualizado) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.status(200).json(envioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eliminarEnvio = async (req, res) => {
  try {
    const envio = await Envio.findOneAndDelete({ idE: req.params.idE });
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.status(200).json({ message: 'Envio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ2 = async (req, res) => {
  try {
    const envio = await Envio.find({ origenE: req.params.origenE, estatusE:"transito" }).populate('origenE').populate('destinoE').populate('tipoE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ3 = async (req, res) => {
  try {
    const envio = await Envio.find({ tipoE: req.params.tipoE }).populate('tipoE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ4 = async (req, res) => {
  try {
    const envio = await Envio.find({ clienteE: req.params.clienteE }).populate('origenE').populate('clienteE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ5 = async (req, res) => {
  try {
    const envio = await Envio.find({ origenE: req.params.origenE }).populate('origenE').populate('clienteE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ6 = async (req, res) => {
  try {
    const envio = await Envio.find({ estatusE: req.params.estatusE }).populate('origenE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ7 = async (req, res) => {
  try {
    const envio = await Envio.find({ tipoE: req.params.tipoE }).populate('origenE').populate('tipoE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQ8 = async (req, res) => {
  try {
    const envio = await Envio.find({ origenE: req.params.origenE, tipoE:"tE03" }).populate('origenE').populate('destinoE').populate('tipoE').populate('clienteE');
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envio' });
    }
    res.body = (envio);
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
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
};

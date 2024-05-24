const TipoEnvio = require('../models/tipoEnvio');

const obtenerTiposE = async (req, res) => {
  try {
    const tipoEnvios = await TipoEnvio.find();
    res.body = (tipoEnvios);
    res.status(200).json(tipoEnvios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearTipoE = async (req, res) => {
  const nuevoTipoE = new TipoEnvio(req.body);
  try {
    const TipoGuardado = await nuevoTipoE.save();
    res.status(201).json(TipoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const crearq0 = async (req, res) => {
  try {
    const TipoGuardado = await TipoEnvio.insertMany(req.body);
    res.status(201).json(TipoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obtenerTipoEID = async (req, res) => {
  try {
    const tipoEnvio = await TipoEnvio.findOne({ idTE: req.params.idTE });
    if (!tipoEnvio) {
      return res.status(404).json({ message: 'No se encontró el tipo de envio' });
    }
    res.body = (tipoEnvio);
    res.status(200).json(tipoEnvio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const actualizarTipoE = async (req, res) => {
  try {
    const TipoActualizado = await TipoEnvio.findOneAndUpdate({ idTE: req.params.idTE }, req.body, {
      new: true
    });
    if (!TipoActualizado) {
      return res.status(404).json({ message: 'No se encontró ael tipo de envio' });
    }
    res.status(200).json(TipoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eliminarTipoE = async (req, res) => {
  try {
    const tipoEnvio = await TipoEnvio.findOneAndDelete({ idTE: req.params.idTE });
    if (!tipoEnvio) {
      return res.status(404).json({ message: 'No se encontró el tipo de envio' });
    }
    res.status(200).json({ message: 'Se elimino el tipo de envio' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  obtenerTiposE,
  crearTipoE,
  obtenerTipoEID,
  actualizarTipoE,
  eliminarTipoE,
  crearq0
};

const Oficina = require('../models/oficina');

const obteneroficinas = async (req, res) => {
  try {
    const oficinas = await Oficina.find();
    res.body = (oficinas);
    res.status(200).json(oficinas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearoficina = async (req, res) => {
  const nuevooficina = new Oficina(req.body);
  try {
    const oficinaGuardado = await nuevooficina.save();
    res.status(201).json(oficinaGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const crearq0 = async (req, res) => {
  try {
    const oficinaGuardado = await Oficina.insertMany(req.body);
    res.status(201).json(oficinaGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const obteneroficinaID = async (req, res) => {
  try {
    const oficina = await Oficina.findOne({ idO: req.params.idO });
    if (!oficina) {
      return res.status(404).json({ message: 'No se encontró la oficina' });
    }
    res.body = (oficina);
    res.status(200).json(oficina);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const actualizaroficina = async (req, res) => {
  try {
    const oficinaActualizado = await Oficina.findOneAndUpdate({ idO: req.params.idO }, req.body, {
      new: true
    });
    if (!oficinaActualizado) {
      return res.status(404).json({ message: 'No se encontró la oficina' });
    }
    res.status(200).json(oficinaActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eliminaroficina = async (req, res) => {
  try {
    const oficina = await Oficina.findOneAndDelete({ idO: req.params.idO });
    if (!oficina) {
      return res.status(404).json({ message: 'No se encontró la oficina' });
    }
    res.status(200).json({ message: 'oficina eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  obteneroficinas,
  crearoficina,
  obteneroficinaID,
  actualizaroficina,
  eliminaroficina,
  crearq0
};

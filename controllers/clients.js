const { Clients } = require('../models');

const getAllClients = async (req, res) => {
    try {
        const clients = await Clients.findAll
        ();
        res.json({
            message: "Clientes leidos exitosamente",
            count: clients.length,
            data: clients
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};


const getByRTN = async (req, res) => {
  try {
    console.log('Request params:', req.params); // Log para verificar el contenido de los params
    const { RTN } = req.params;
    if (!RTN) {
      return res.status(400).json({ error: 'Se requiere el RTN del cliente' });
    }

    const client = await Clients.findOne({
      where: { RTN }
    });

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json({
      message: 'Cliente leido exitosamente',
      data: client
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};

const createClient = async (req, res) => {
  console.log('Request body:', req.body); // Log para verificar el contenido del body 
  try {
    let {
        RTN,
        name,
        address,
        telephoneNumber,
        email,
        username
    } = req.body || {};

    if (!RTN || !name || !email || !telephoneNumber) {
        return res.status(400).json({
            error: 'RTN, name, email y telephoneNumber son campos requeridos'
        });
    }

    const created = await Clients.create({
        RTN,
        name,
        address,
        telephoneNumber,
        email,
        username: username || null,
        status: 'activo'
    });

    res
      .status(201)
      .json({
        message: 'Cliente creado exitosamente',
        data: created
      });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};


const deleteClientbyRTN = async (req, res) => {
  try {
    const { RTN } = req.params;
    if (!RTN) {
      return res.status(400).json({ error: 'RTN es requerido' });
    }
    const deletedCount = await Clients.destroy({
      where: { RTN }
    });

    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    return res.json({
      message: 'Cliente eliminado exitosamente',
      RTN
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};


const updateClientbyRTN = async (req, res) => {
  try {
    const { RTN } = req.params;

    if (!RTN) {
      return res.status(400).json({ error: 'El RTN es requerido en la ruta' });
    }

    const client = await Clients.findByPk(RTN);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    if (req.body.RTN && req.body.RTN !== RTN) {
      return res.status(400).json({ error: 'El RTN no puede cambiarse' });
    }
    await client.update(req.body);
    return res.json({
      message: 'Cliente actualizado exitosamente',
      data: client
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};




module.exports = {
    getAllClients,
    getByRTN,
    createClient,
    deleteClientbyRTN,
    updateClientbyRTN
};
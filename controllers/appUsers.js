const { Users } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll
        (
            {
            attributes: ['username', 'name', 'roleID', 'status', 'createdAt'] 
            }
        );

        res.json({
            message: "Usuarios leidos exitosamente",
            count: users.length,
            data: users
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};


const getByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(406).json({ error: 'Se requiere el nombre de usuario' });
    }

    const user = await Users.findOne({
      where: { username },
      attributes: ['username', 'name', 'roleID', 'status', 'createdAt']
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({
      message: 'Usuario leido exitosamente',
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};

const createUser = async (req, res) => {
    console.log('Request body:', req.body); // Log para verificar el contenido del body
  try {
    let {
        username,
        password,
        name,
        roleID
    } = req.body || {};

    if (!username || !password || !name || !roleID) {
        return res.status(400).json({
            error: 'username, password, name y roleID son campos requeridos'
        });
    }

    const created = await Users.create({
        username,
        password,
        name,
        roleID,
        status: 'activo'
    });

    res
      .status(201)
      .json({
        message: 'Usuario creado exitosamente',
        data: created
      });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};


const deleteUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ error: 'username es requerido' });
    }
    const deletedCount = await Users.destroy({
      where: { username }
    });

    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.json({
      message: 'Usuario eliminado exitosamente',
      username
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};


const updateUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({ error: 'El nombre de usuario es requerido en la ruta' });
    }

    const user = await Users.findByPk(username);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (req.body.username && req.body.username !== username) {
      return res.status(400).json({ error: 'El nombre de usuario no puede cambiarse' });
    }
    await user.update(req.body);
    return res.json({
      message: 'Usuario actualizado exitosamente',
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};




module.exports = {
    getAllUsers,
    getByUsername,
    createUser,
    deleteUserByUsername,
    updateUserByUsername
};
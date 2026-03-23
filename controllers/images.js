const { Users } = require('../models');

const getByProductID = async (req, res) => {
  try {
    const { productID } = req.params;
    if (!productID) {
      return res.status(406).json({ error: 'Se requiere el ID del producto' });
    }

    const images = await Users.findAll({
      where: { productID },
      attributes: ['imageID', 'productID', 'image']
    });

    if (!images) {
      return res.status(404).json({ error: 'Imagenes no encontradas' });
    }

    res.json({
      message: 'Imagenes leidas exitosamente',
      data: images
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};

const AddImage = async (req, res) => {
  try {
    let {
        imageID,
        productID,
        image
    } = req.body || {};

    if (!imageID || !productID || !image) {
        return res.status(400).json({
            error: 'imageID, productID y image son campos requeridos'
        });
    }

    const created = await Users.create({
        imageID,
        productID,
        image
    });

    res
      .status(201)
      .json({
        message: 'Imagen agregada exitosamente',
        data: created
      });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  getByProductID,
  AddImage
};
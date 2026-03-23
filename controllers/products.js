const { Products } = require('../models');
const { Op } = require('sequelize'); //Operadores de Sequelize

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll();

        res.json({
            message: "Productos leidos exitosamente",
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};


const getByProductID = async (req, res) => {
  try {
    const { productID } = req.params;
    if (!productID) {
      return res.status(400).json({ error: 'Se requiere el ID del producto' });
    }

    const product = await Products.findOne({
      where: { productID },
      attributes: ['productID', 'name', 'currentPrice', 'currentStock']
    });

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({
      message: 'Producto leido exitosamente',
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};

const createProduct = async (req, res) => {
  try {
    let {
        productID,
        name,
        currentPrice,
        currentStock
    } = req.body || {};

    if (!productID || !name || !currentPrice || !currentStock) {
        return res.status(400).json({
            error: 'productID, name, currentPrice y currentStock son campos requeridos'
        });
    }

    const created = await Products.create({
        productID,
        name,
        currentPrice,
        currentStock
    });

    res
      .status(201)
      .json({
        message: 'Producto creado exitosamente',
        data: created
      });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
};


const deleteProductByProductID = async (req, res) => {
  try {
    const { productID } = req.params;
    if (!productID) {
      return res.status(400).json({ error: 'productID es requerido' });
    }
    const deletedCount = await Products.destroy({
      where: { productID }
    });

    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.json({
      message: 'Producto eliminado exitosamente',
      productID
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};


const updateProductByProductID = async (req, res) => {
  try {
    const { productID } = req.params;

    if (!productID) {
      return res.status(400).json({ error: 'El ID del producto es requerido en la ruta' });
    }

    const product = await Products.findByPk(productID);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    if (req.body.productID && req.body.productID !== productID) {
      return res.status(400).json({ error: 'El ID del producto no puede cambiarse' });
    }
    await product.update(req.body);
    return res.json({
      message: 'Producto actualizado exitosamente',
      data: product
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};

const getAllProductsInStock = async (req, res) => {
    try {
        const products = await Products.findAll({
            where: {
                stock: {
                    [Op.gt]: 0
                }
            }
        });

        res.json({
            message: "Productos leidos exitosamente",
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};




module.exports = {
    getAllProducts,
    getByProductID,
    createProduct,
    deleteProductByProductID,
    updateProductByProductID,
    getAllProductsInStock
};
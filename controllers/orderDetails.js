const { OrderDetails }  = require('../models');

const createOrderDetail = async (req, res) => {
    try {
        const { orderDetailID, orderID, productID, quantity, price } = req.body || {};

        if (!orderDetailID || !orderID || !productID || !quantity || !price) {
            return res.status(400).json({
                error: 'todos los campos son requeridos: orderDetailID, orderID, productID, quantity, price'
            });
        }

        const created = await OrderDetails.create({
            orderDetailID,
            orderID,
            productID,
            quantity,
            price
        });

        res.status(201).json({
            message: 'Detalle de orden creado exitosamente',
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
    createOrderDetail
};
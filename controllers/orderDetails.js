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

const getOrderDetailsByOrderID = async (req, res) => {
    try {
        const { orderID } = req.params;
        const orderDetails = await OrderDetails.findAll({ where: { orderID } });
        if (!orderID) {
            return res.status(400).json({
                error: 'orderID es un campo requerido'
            });
        }

        if (!orderDetails || orderDetails.length === 0) {
            return res.status(404).json({ error: 'No se encontraron detalles para esta orden' });
        }

        res.status(200).json({
            message: 'Detalles de orden obtenidos exitosamente',
            data: orderDetails
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: error.message
        });
    }
};

const modifyOrderDetail = async (req, res) => {
    try {
        const { orderDetailID } = req.params;
        const { quantity, price } = req.body || {};

        const orderDetail = await OrderDetails.findByPk(orderDetailID);
        if (!orderDetail) {
            return res.status(404).json({ error: 'Detalle de orden no encontrado' });
        }

        await orderDetail.update({ quantity, price });
        res.status(200).json({
            message: 'Detalle de orden actualizado exitosamente',
            data: orderDetail
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: error.message
        });
    }
};

const deleteOrderDetail = async (req, res) => {
    try {
        const { orderDetailID } = req.params;
        const orderDetail = await OrderDetails.findByPk(orderDetailID);
        if (!orderDetail) {
            return res.status(404).json({ error: 'Detalle de orden no encontrado' });
        }
        await orderDetail.destroy();
        res.status(200).json({
            message: 'Detalle de orden eliminado exitosamente'
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: error.message
        });
    }
};


module.exports = {
    createOrderDetail,
    getOrderDetailsByOrderID,
    modifyOrderDetail,
    deleteOrderDetail
};
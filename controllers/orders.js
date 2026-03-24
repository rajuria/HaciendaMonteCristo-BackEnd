const { Order } = require('../models');

const createOrder = async (req, res) => {
    try {
        const { orderID, RTN, status } = req.body || {};

        if (!orderID || !RTN) { 
            return res.status(400).json({
                error: 'orderID y RTN son campos requeridos'
            });
        }

        const created = await Order.create({
            orderID,
            RTN,
            status: status || 'Pendiente' 
        });

        res.status(201).json({
            message: 'Orden creada exitosamente',
            data: created
        });
    } catch (error) {        
        console.error('Error:', error);
        res.status(500).json({
            error: error.message
        });
    }
};

const modifyOrderStatus = async (req, res) => {
    try {
        const { orderID } = req.params;
        const { status } = req.body;

        const order = await Order.findByPk(orderID);

        if (!order) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }

        await order.update({ status });

        res.json({
            message: 'Estado de la orden actualizado exitosamente',
            data: order
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    createOrder,
    modifyOrderStatus
};

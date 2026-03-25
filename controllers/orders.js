const { Order, Users, Sequelize } = require('../models');
const { Op } = Sequelize; 

const createOrder = async (req, res) => {
    try {
        const { orderID, RTN, status } = req.body || {};
        if (!orderID || !RTN) { 
            return res.status(400).json({ error: 'orderID y RTN son requeridos' });
        }

        const created = await Order.create({
            orderID,
            RTN,
            vendedor: null,
            status: status || 'Pendiente' 
        });

        res.status(201).json({ message: 'Orden creada exitosamente', data: created });
    } catch (error) {         
        res.status(500).json({ error: error.message });
    }
};

const modifyOrderStatus = async (req, res) => {
    try {
        const { orderID } = req.params;
        const { status } = req.body;
        const order = await Order.findByPk(orderID);
        if (!order) return res.status(404).json({ error: 'Orden no encontrada' });

        await order.update({ status });
        res.json({ message: 'Estado actualizado', data: order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrdersByDateRange = async (req, res) => {
    try {
        const { startDate, endDate } = req.params;
        if (!startDate || !endDate) {
            return res.status(400).json({ error: 'Faltan fechas start/end' });
        }

        const orders = await Order.findAll({
            where: {
                createdAt: {
                    [Op.between]: [`${startDate}T00:00:00.000Z`, `${endDate}T23:59:59.999Z`]
                }
            },
            order: [['createdAt', 'DESC']]
        });
        res.json({ count: orders.length, data: orders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrdersByVendor = async (req, res) => {
    try {
        const { vendedor } = req.params;
        const orders = await Order.findAll({
            where: { vendedor, status: 'Asignada' }
        });
        res.json({ count: orders.length, data: orders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrdersByClient = async (req, res) => {
    try {
        const { RTN } = req.params;
        const orders = await Order.findAll({ where: { RTN } });
        res.json({ count: orders.length, data: orders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const asignarOrden = async (req, res) => {
    try {
        const { orderID, vendedor } = req.params;

        const order = await Order.findByPk(orderID);
        if (!order) return res.status(404).json({ error: 'Orden no encontrada' });

        const userExists = await Users.findByPk(vendedor);
        if (!userExists) return res.status(404).json({ error: 'El vendedor no existe' });

        await order.update({ vendedor, status: 'Asignada' });

        res.json({ message: 'Orden asignada con éxito', data: order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const solicitarCancelacion = async (req, res) => {
    try {
        const { orderID } = req.params;
        const order = await Order.findByPk(orderID);
        if (!order) return res.status(404).json({ error: 'Orden no encontrada' });

        await order.update({ status: 'Cancelacion Pendiente' });
        res.json({ message: 'Cancelación solicitada', data: order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const aprobarCancelacion = async (req, res) => {
    try {
        const { orderID } = req.params;
        const order = await Order.findByPk(orderID);
        if (!order) return res.status(404).json({ error: 'Orden no encontrada' });

        await order.update({ status: 'Cancelada' });
        res.json({ message: 'Cancelacion aprobada', data: order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createOrder,
    modifyOrderStatus,
    getOrdersByVendor,
    getOrdersByDateRange,
    getOrdersByClient,
    asignarOrden,
    solicitarCancelacion,
    aprobarCancelacion
};
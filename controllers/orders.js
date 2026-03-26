const { Orders, OrderDetails, Users, Sequelize } = require('../models');
const { Op } = Sequelize; 

const getStats = async (req, res) => {
    try {
        const { startDate, endDate } = req.params;
        
        const cleanStart = startDate.substring(0, 10);
        const cleanEnd = endDate.substring(0, 10);

        const orders = await Orders.findAll({
            where: {
                createdAt: {
                    [Op.between]: [
                        `${cleanStart}T00:00:00.000Z`, 
                        `${cleanEnd}T23:59:59.999Z`
                    ]
                }
            },
            include: [{
                model: OrderDetails,
                as: 'OrderDetails',
                attributes: ['quantity', 'pricePerItem']
            }]
        });

        let totalVendido = 0;
        let countCompletados = 0;
        let countCancelados = 0;
        let countPendientes = 0;

        const reportData = orders.map(order => {
            const detalles = order.OrderDetails || [];
            
            const totalOrden = detalles.reduce((acc, item) => {
                return acc + (parseFloat(item.pricePerItem) * item.quantity);
            }, 0);
            if (order.status === 'Completado') {
                totalVendido += totalOrden;
                countCompletados++;
            } else if (order.status === 'Cancelada' || order.status === 'Cancelacion Pendiente') {
                countCancelados++;
            } else {
                countPendientes++;
            }

            return {
                orderID: order.orderID,
                RTN: order.RTN,
                status: order.status,
                vendedor: order.vendedor,
                fecha: order.createdAt,
                total: totalOrden.toFixed(2)
            };
        });

        res.json({
            message: "Estadísticas generadas exitosamente",
            stats: {
                ingresosTotales: totalVendido.toFixed(2),
                pedidosTotales: orders.length,
                completados: countCompletados,
                cancelados: countCancelados,
                pendientes: countPendientes
            },
            data: reportData
        });

    } catch (error) {
        console.error("Error en getStats:", error);
        res.status(500).json({ error: "Error interno al procesar el reporte" });
    }
};

const createOrder = async (req, res) => {
    try {
        const { RTN, status, orderDetails } = req.body;

        if (!RTN) { 
            return res.status(400).json({ error: 'El RTN es requerido' });
        }
        
        const nuevoOrderID = "ORD-" + Date.now();
        
        const nuevaOrden = await Orders.create({
            orderID: nuevoOrderID,
            RTN,
            vendedor: null, 
            status: status || 'Pendiente' 
        });

        if (orderDetails && orderDetails.length > 0) {
            for (let i = 0; i < orderDetails.length; i++) {
                const item = orderDetails[i];

                await OrderDetails.create({
                    orderDetailID: "DET-" + Date.now() + "-" + i, 
                    orderID: nuevaOrden.orderID,
                    productID: item.productID,
                    quantity: item.quantity,
                    pricePerItem: item.price
                });
            }
        }

        res.status(201).json({ 
            message: 'Orden y detalles creados exitosamente', 
            orderID: nuevaOrden.orderID,
            data: nuevaOrden 
        });

    } catch (error) {         
        console.error("Error al procesar checkout:", error);
        res.status(500).json({ error: error.message });
    }
};

const modifyOrderStatus = async (req, res) => {
    try {
        const { orderID } = req.params;
        const { status } = req.body;
        const order = await Orders.findByPk(orderID);
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

        const orders = await Orders.findAll({
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
        const orders = await Orders.findAll({
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
        const orders = await Orders.findAll({ where: { RTN } });
        res.json({ count: orders.length, data: orders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const asignarOrden = async (req, res) => {
    try {
        const { orderID, vendedor } = req.params;
        const order = await Orders.findByPk(orderID);
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
        const order = await Orders.findByPk(orderID);
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
        const order = await Orders.findByPk(orderID);
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
    aprobarCancelacion,
    getStats
};
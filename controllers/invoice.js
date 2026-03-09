const { Invoice } = require('../models');

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.json({
            message: "Facturas leídas exitosamente",
            count: invoices.length,
            data: invoices
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

const getInvoiceByID = async (req, res) => {
    try {
        const { invoiceID } = req.params;
        if (!invoiceID) {
            return res.status(400).json({ error: "Se requiere el ID de la factura" });
        }

        const invoice = await Invoice.findOne({
            where: { invoiceID }
        });

        if (!invoice) {
            return res.status(404).json({ error: "Factura no encontrada" });
        }

        res.json({
            message: "Factura leída exitosamente",
            data: invoice
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

const createInvoice = async (req, res) => {
    try {
        let {
            invoiceID,
            orderID,
            RTN,
            status,
            paymentMethod
        } = req.body || {};

        if (!invoiceID || !orderID || !RTN || !status || !paymentMethod) {
            return res.status(400).json({
                error: "invoiceID, orderID, RTN, status y paymentMethod son campos requeridos"
            });
        }

        const created = await Invoice.create({
            invoiceID,
            orderID,
            RTN,
            status,
            paymentMethod
        });

        res.status(201).json({
            message: "Factura creada exitosamente",
            data: created
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

module.exports = {
    getAllInvoices,
    getInvoiceByID,
    createInvoice
};

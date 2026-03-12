const { SignedInvoices } = require('../models');

const getAllSignedInvoices = async (req, res) => {
    try {
        const signedInvoices = await SignedInvoices.findAll();
        res.json({
            message: "Facturas firmadas leídas exitosamente",
            count: signedInvoices.length,
            data: signedInvoices
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

const createSignedInvoice = async (req, res) => {
    try {
        let {
            signedInvoiceID,
            orderID,
            status,
            signedInvoice
        } = req.body || {};

        if (!signedInvoiceID || !orderID || !status || !signedInvoice) {
            return res.status(400).json({
                error: "signedInvoiceID, orderID, status y signedInvoice son campos requeridos"
            });
        }

        const created = await SignedInvoices.create({
            signedInvoiceID,
            orderID,
            status,
            signedInvoice
        });

        res.status(201).json({
            message: "Factura firmada creada exitosamente",
            data: created
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

module.exports = {
    getAllSignedInvoices,
    createSignedInvoice
};
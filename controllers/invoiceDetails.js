const { InvoiceDetails } = require('../models');

const createInvoiceDetail = async (req, res) => {
    try {
        let {
            invoiceDetailID,
            invoiceID,
            productID,
            quantity,
            pricePerItem
        } = req.body || {};

        if (!invoiceDetailID || !invoiceID || !productID || !quantity || !pricePerItem) {
            return res.status(400).json({
                error: "invoiceDetailID, invoiceID, productID, quantity y pricePerItem son campos requeridos"
            });
        }

        const created = await InvoiceDetails.create({
            invoiceDetailID,
            invoiceID,
            productID,
            quantity,
            pricePerItem
        });

        res.status(201).json({
            message: "Detalle de factura creado exitosamente",
            data: created
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

module.exports = {
    createInvoiceDetail
};
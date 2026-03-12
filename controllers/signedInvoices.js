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

module.exports = {
    getAllSignedInvoices
};
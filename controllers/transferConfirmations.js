const { TransferConfirmations } = require('../models');

const getAllTransferConfirmations = async (req, res) => {
    try {
        const confirmations = await TransferConfirmations.findAll();
        res.json({
            message: "Confirmaciones de transferencia leídas exitosamente",
            count: confirmations.length,
            data: confirmations
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

const createTransferConfirmation = async (req, res) => {
    try {
        let {
            confirmationID,
            orderID,
            invoiceID,
            status,
            confirmation
        } = req.body || {};

        if (!confirmationID || !orderID || !invoiceID || !status || !confirmation) {
            return res.status(400).json({
                error: "confirmationID, orderID, invoiceID, status y confirmation son campos requeridos"
            });
        }

        const created = await TransferConfirmations.create({
            confirmationID,
            orderID,
            invoiceID,
            status,
            confirmation
        });

        res.status(201).json({
            message: "Confirmación de transferencia creada exitosamente",
            data: created
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

module.exports = {
    getAllTransferConfirmations,
    createTransferConfirmation
};
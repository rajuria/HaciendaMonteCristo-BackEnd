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

module.exports = {
    getAllTransferConfirmations
};
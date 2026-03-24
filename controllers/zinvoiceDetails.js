const { InvoiceDetails } = require('../models');

const getByInvoiceID = async (req, res) => {
  try {
    const { invoiceID } = req.params;
    if (!invoiceID) {
      return res.status(406).json({ error: 'Se requiere el ID de la factura para encontrar los detalles' });
    }

    const invoiceDetails = await InvoiceDetails.findAll({
      where: { invoiceID }
    });

    if (!invoiceDetails) {
      return res.status(404).json({ error: 'Detalle de factura no encontrado' });
    }

    res.json({
      data: invoiceDetails
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la Base de Datos' });
  }
};

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

const deleteInvoiceDetail = async (req, res) => {
    try {
        const { invoiceDetailID } = req.params;
        if (!invoiceDetailID) {
            return res.status(400).json({ error: "invoiceDetailID es requerido" });
        }

        const deletedCount = await InvoiceDetails.destroy({
            where: { invoiceDetailID }
        });

        if (deletedCount === 0) {
            return res.status(404).json({ error: "Detalle de factura no encontrado" });
        }

        return res.json({
            message: "Detalle de factura eliminado exitosamente",
            invoiceDetailID
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error en la Base de Datos" });
    }
};

module.exports = {
    createInvoiceDetail,
    deleteInvoiceDetail,
    getByInvoiceID
};
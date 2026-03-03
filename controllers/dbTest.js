const { Users } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['username', 'name', 'roleID', 'status', 'createdAt'] 
        });

        res.json({
            message: "Users fetched successfully",
            count: users.length,
            data: users
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
};

module.exports = {
    getAllUsers
};
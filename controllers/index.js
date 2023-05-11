const {get} = require('../model/coffee');

exports.read = async (req, res) => {
    try {
        const products = await get();
        return res.json({data: products.rows});
    } catch (error) {
        return res.status(400).json({error: error});
    }
};
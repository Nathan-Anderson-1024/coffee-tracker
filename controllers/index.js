const {get} = require('../model/coffee');

exports.read = async (req, res) => {
    try {
      const products = await get();
      //console.log(products.rows);
      return res.json({ data: products.rows });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  };
const {get, createUser, checkEmail} = require('../model/coffee');
const formidable = require('formidable');
const bcrypt = require('bcrypt');

exports.read = async (req, res) => {
    try {
      const products = await get();
      return res.json({ data: products.rows });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  };

exports.write = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields) => {
    const {email, password} = fields;
    if (!email || !password) {
      return res.status(400).json({
        error: "email or password cannot be blank"
      })
    }
    const emailAuth = await checkEmail(email);
    const validEmail = emailAuth.rows[0].email;
    if (validEmail) {
      return res.status(400).json({
        error: "There is already an account associated with that email."
    })
    }
    
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await createUser(email, hashedPassword);
    }
    catch (error) {
      return res.status(400).json({
        error,
      });
    }
  })
  
}
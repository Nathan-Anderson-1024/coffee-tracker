const {get, createUser, checkEmail, getUserId, updateUserInfo} = require('../model/coffee');
const formidable = require('formidable');
const bcrypt = require('bcrypt');
const passport = require('passport');

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
    const {email, password, name, lastName} = fields;
    if (!email || !password) {
      return res.status(400).json({
        error: "email or password cannot be blank"
      })
    }
    const emailAuth = await checkEmail(email);
    const validEmail = emailAuth.rows[0];
    if (validEmail) {
      return res.status(400).json({
        error: "There is already an account associated with that email."
      })
    }
    
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await createUser(email, hashedPassword, name, lastName);
    }
    catch (error) {
      return res.status(400).json({
        error,
      });
    }
  })
  
}

exports.login = (req, res) => {
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
    if (emailAuth.rowCount == 0) return res.status(400).json({
      error: "There is already an account associated with that email."
    });
    try {
      const compare = await bcrypt.compare(password, hashedPassword);
      if (!compare) return console.log('invalid username or password');
      return console.log('logged in');
    }
    catch (error) {
      return error
    }


  })


}
// TODO: Create controller function for updating login info
exports.update = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields) => {
    console.log('controller')
    console.log(fields)
    if (!fields) {
      return res.status(400).json({
        error: 'Field is empty'
      })
    }
    else {
      return res.status(200).json({
        fields
      })
    }
  })
}
const {checkEmail, getUserId} = require('./model/coffee');
const bcrypt = require('bcrypt');

const emailExists = async (email) => {
    const data = await checkEmail(email);
    if (data.rowCount == 0) return false;
    return data.rows[0];
}

const matchPassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    return match;
}

const getId = async (email) => {
    const id = await getUserId(email);
    const results = id.rows[0];
    return results;
}

module.exports = {emailExists, matchPassword, getId}
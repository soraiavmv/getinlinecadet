const pool = require("./connection");

module.exports.createUser = async (username, password) => {
    let newPassword = CryptoJS.MD5(password);
    try{
        const sqlStatement = "INSERT INTO users (username, password) VALUES (?,?)";
        const user = await pool.query(sqlStatement, [username, newPassword]);
        return user;
    } catch (err) {
        return err;
    }
}
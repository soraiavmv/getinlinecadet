const pool = require("./connection");

module.exports.createUser = async (username, password) => {
    try{
        const sqlStatement = "INSERT INTO users (username, password) VALUES (?,?)";
        const user = await pool.query(sqlStatement, [username, password]);
        return user;
    } catch (err) {
        return err;
    }
}
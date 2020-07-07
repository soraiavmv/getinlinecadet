const pool = require("./connection");

module.exports.getUser = async (username, password) => {
    let newPassword = CryptoJS.MD5(password);
    
    try{
        const sqlStatement = "SELECT password FROM users WHERE username=?";
        const user = await pool.query(sqlStatement, [username]);

        if(user.password === newPassword){
            return user;
        }

        throw new Error("There is something wrong with those credentials...");

    } catch (err) {
        return err;
    }
}
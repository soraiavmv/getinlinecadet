const db = require("../models/index.js");

module.exports.getUser = async (username, password) => {

  try {
    const sqlStatement = "SELECT * FROM users WHERE username=?";
    const user = await pool.query(sqlStatement, [username]);

    if (Object.keys(user).length !== 0 && user[0].password === password) {
      return user;
    }
    
    throw new Error("There is something wrong with those credentials...");
  } catch (err) {
    console.log(err);
    return err;
  }
};


module.exports.createUser = async (username, password) => {
  try {
   // const sqlStatement = "INSERT INTO users (username, password) VALUES (?,?)";
    //const user = await pool.query(sqlStatement, [username, password]);

    
    return user;
  } catch (err) {
    return err;
  }
};

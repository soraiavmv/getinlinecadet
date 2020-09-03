const { user } = require("../models/index.js")

module.exports.getAll = async () => {
	const users = await user.findAll();
	return users;
};

module.exports.getByUsername = async (username) => {
  const result = await user.findByPk(username);
  return result;
};

module.exports.authenticate  = async (username, password) => {
  const result = await this.getByUsername(username);

  if (Object.keys(result).length !== 0 && result.password === password) {
    return result;
  }
  
  throw new Error("Auth failed");
}

module.exports.createUser = async (username, password) => {
    const data = {
      username,
      password
    }
    const result = await user.create(data);
    return result;
};


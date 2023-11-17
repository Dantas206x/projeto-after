const User = require("./models/User");

const getUserDataFromDatabase = async (userId) => {
  try {
    const userData = await User.findOne({ _id: userId });
    return userData;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};

module.exports = getUserDataFromDatabase;
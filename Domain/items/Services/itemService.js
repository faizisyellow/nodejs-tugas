const itemSchema = require("../Models/items");
module.exports.findItems = async () => {
  try {
    const items = await itemSchema.find();
    return items;
  } catch (error) {
    throw error;
  }
};

module.exports.findItemById = async (itemId) => {
  try {
    const items = await itemSchema.findItemById(itemId);
    return items;
  } catch (error) {
    throw error;
  }
};

const items = require("../Domain/items/Models/items");
const ItemRepository = require("../Domain/items/Repositories/itemRepository.js");
const ItemService = require("../Domain/items/Services/ItemService");
const SuccesMassage = require("../infrastructures/Contants/SuccesMassage");
const Response = require("../Infrastructures/Response");

module.exports.getItems = async (_req, res) => {
  try {
    const items = await ItemRepository.findItems();
    res.json(Response.Success(items, SuccesMassage.GetData));
  } catch (error) {
    res.json(Response.Fail(items, error.message));
  }
};

module.exports.getItemById = async (req, res) => {
  try {
    const items = await ItemRepository.finditemByid(req.params.id);
    res.json(Response.Fail(items, SuccesMassage.GetData));
  } catch (error) {
    res.json(Response.Fail(items, error.message));
  }
};
module.exports.saveItem = async (req, res) => {
  try {
    const items = await ItemService.updateItem(req.params.id);
    res.json(Response.Success(items, SuccesMassage.insertData));
  } catch (error) {
    res.json(Response.Fail(items, error.message));
  }
};
module.exports.updateItem = async (req, res) => {
  try {
    const items = await ItemService.updateItem(req.params.id, req.body);
    res.json(Response.Success(items, SuccesMassage.updateData));
  } catch (error) {
    res.json(Response.Fail(items, error.message));
  }
};
module.exports.deleteItem = async (req, res) => {
  try {
    const items = await ItemService.DeleteItem(req.params.id);
    res.json(Response.SuccesMassage.DeleteItem);
  } catch (error) {
    res.json(Response.Fail(items, error, message));
  }
};

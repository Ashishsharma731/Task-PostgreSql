const { Item } = require("../models");
const { itemSchema, deleteItemSchema } = require("../validations/itemValidation");

exports.createItem = async (req, res) => {
  try {
    const { error } = itemSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { title, description } = req.body;
    const item = await Item.create({ title, description, user_id: req.user.userId });
    res.status(201).json({ message: "Item created!", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = itemSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { title, description } = req.body;
    const item = await Item.findByPk(id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    item.title = title;
    item.description = description;
    await item.save();

    res.json({ message: "Item updated!", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { error } = deleteItemSchema.validate(req.params);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const { id } = req.params;
    const item = await Item.findByPk(id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    await item.destroy();
    res.json({ message: "Item deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

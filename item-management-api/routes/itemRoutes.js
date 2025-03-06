const express = require("express");
const { createItem, getItems, updateItem, deleteItem } = require("../controllers/itemController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, createItem);
router.get("/", getItems);
router.put("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

module.exports = router;

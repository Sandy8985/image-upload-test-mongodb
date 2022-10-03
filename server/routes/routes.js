const express = require("express");
const { getItems, createItem } = require("../controllers/controllers");
const iRouter = express.Router();

iRouter.get("/", getItems);
iRouter.post("/", createItem);

module.exports = iRouter;

const express = require("express");
const router = express.Router();

const menuService = require("../Services/menu.service");

router.get("/", menuService.getMenu);

module.exports = router;

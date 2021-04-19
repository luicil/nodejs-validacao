const express = require("express");
const router = express.Router();
const flash = require("express-flash");

router.get("/", (req, res) =>{
    res.send("Rodando...");
});

module.exports = router;

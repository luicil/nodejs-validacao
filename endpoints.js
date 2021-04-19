const express = require("express");
const router = express.Router();
const flash = require("express-flash");

router.get("/", (req, res) =>{
    res.render("index");
});

router.post("/form", (req, res) =>{
    var {email, nome, pontos} = req.body;
    
    var emailErr = "";
    var pontosErr = "";
    var nomeErr = "";
    var err = false;
    if(email == undefined || email == ""){
        emailErr = "e-mail inválido";
        err = true;
    };

    if(pontos == undefined || pontos < 20){
        pontosErr = "Pontos não pode ser menor que 20";
        err = true;
    };

    if(nome == undefined || nome == ""){
        nomeErr = "Nome não pode ser vazio";
        err = true;
    };
    
    if(err){
        res.redirect("/");
    } else {
        res.send("OK");
    };

});

module.exports = router;

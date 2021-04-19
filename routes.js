const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{

    var emailErr = req.flash("emailErr");
    var pontosErr = req.flash("pontosErr");
    var nomeErr = req.flash("nomeErr");
    emailErr = (emailErr == undefined || emailErr.length == 0) ? undefined : emailErr;
    pontosErr = (pontosErr == undefined || pontosErr.length == 0) ? undefined : pontosErr;
    nomeErr = (nomeErr == undefined || nomeErr.length == 0) ? undefined : nomeErr;

    res.render("index", {emailErr, pontosErr, nomeErr});
    
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
        req.flash("emailErr", emailErr);
        req.flash("pontosErr", pontosErr);
        req.flash("nomeErr", nomeErr);
        res.redirect("/");
    } else {
        res.send("OK");
    };

});

module.exports = router;

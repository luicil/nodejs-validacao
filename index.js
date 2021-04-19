const express = require("express");
const app = express();
const port = 80;
const endPoints = require("./endpoints");
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.set('trust proxy', 1) // trust first proxy
app.cookieParser("Ramissa Rabuja");

app.use(session({
  secret: "Ramissa Rabuja",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use("/", endPoints);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(flash());
app.listen(port,() =>{
    console.log("Servidor rodando !");
});

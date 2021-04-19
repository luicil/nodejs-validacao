const express = require("express");
const app = express();
const port = 80;
const endPoints = require("./endpoints");
const session = require("express-session");
const flash = require("express-flash");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", endPoints);
app.use(flash());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: "Ramissa Rabuja",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.listen(port,() =>{
    console.log("API iniciada com sucesso !");
});

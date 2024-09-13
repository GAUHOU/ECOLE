const express = require("express");
const router = require("./backend/routes/post.routes");
const port = process.env.PORT || 8000;
const app = express();


app.use(express.urlencoded({extended: true}));

app.use(express.json());

//Router


app.set("view engine", "ejs");

app.set("views", "./frontend/pages");

app.use(express.static("./frontend/public"));

app.get("/", (req, res) => {
    title = "ACCUEIL";
    res.render("home");
});

app.get("/home", (req, res) => {
    title = "ACCUEIL";
    res.render("home");
});

app.get("/apropos", (req, res) => {
    title = "APROPOS";
    res.render("apropos");
});

app.get("/galerie", (req, res) =>{
    title = "GALERIE";
    res.render("galerie")
});

app.get("/actualite", (req, res) =>{
    title = "ACTUALITES";
    res.render("actualite")
});

app.get("/login", (req, res) =>{
    title = "CONNEXION";
    res.render("login");
});

app.get("/register", (req, res) =>{
    title = "ENREGISTREMENT";
    res.render("register");
});

app.get("/admin", (req, res) =>{
    title = "ADMINISTRATEUR";
    res.render("admin");
});

app.get("/rh", (req, res) =>{
    title = "RESSOURE HUMAINE";
    res.render("rh");
});


app.listen(port, ()=>{
    console.log("Le serveur des demarer....");
});


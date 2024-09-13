const express = require("express");
const connection = require("../config/db");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/sign", (req, res) =>{
    const { user, email, mdp } = req.body;
    const sql = `INSERT INTO users (nom_prenoms, email, mdp) VALUES (?, ?, ?)`;
    connection.query(sql, [user, email, mdp], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            return res.status(500).json({ error: "Erreur lors de l'insertion des données." });
        }

        console.log("Données insérées avec succès, ID :", result.insertId);
        res.status(201).json({ message: "Utilisateur créé avec succès", userId: result.insertId });
    });
});


router.post("/login", (req, res) =>{
    const {email, mdp} = req.body;
    const sql = `SELECT * FROM users WHERE email = ? AND mdp = ?`;
    connection.query(sql, [email, mdp], (err, results) =>{
        if (err) {
            console.error("Erreur lors de la recherche de l'utilisateur :", err);
            return res.status(500).json({ error: "Erreur lors de la recherche de l'utilisateur." });
        }
        if (results.length === 0) {
            const sql_admin = `SELECT * FROM admins WHERE email = ? AND mdp = ?`;
            connection.query(sql_admin, [email, mdp], (err, resultsAdmin) =>{
                if (err) {
                    console.error("Erreur lors de la recherche de l'administrateur :", err);
                    return res.status(500).json({ error: "Erreur lors de la recherche de l'administrateur." });
                }

                if (resultsAdmin.length === 0) {
                    return res.status(401).json({ error: "Email ou mot de passe incorrect." });
                }

                const dataAdmin = resultsAdmin[0];
                if (email == dataAdmin.email && mdp == dataAdmin.mdp) {
                    res.redirect("/admin");
                }
            });
        }
        else{
            const dataUser = results[0];
            if (email == dataUser.email && mdp == dataUser.mdp) {
                res.redirect("/home");
                // Authentification réussie
                //res.status(200).json({ message: "Connexion réussie", userId: dataUser.id });
            }
            else{
                return res.status(401).render("login", { error: "Email ou mot de passe incorrect." });
            }
        }
    })
})

module.exports = router;
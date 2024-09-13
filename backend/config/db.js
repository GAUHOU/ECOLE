const mysql = require("mysql");

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clinique'
});

connection.connect((err)=>{
    if (err) {
        console.log("Erreur de la connection à la base de donnée...");
    }else{
        console.log("Connecté a la base de donnée...");
    }
});

module.exports = connection;
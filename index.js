const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    maxHttpBufferSize: 10 * 1024 * 1024  // 10 Mo
});
const mongoose = require('mongoose');
const bdd = require('./back/database');

let loggedIn = false;

// BDD
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:thisisasecurepass@isenexplorer.ww6hngj.mongodb.net/Users?retryWrites=true&w=majority", err => {
    if (!err) console.log('bdd connecté');
    else console.log('erreur bdd');
});

// Collections bdd
const connectionSchema = new mongoose.Schema({
    id: String,
    psw: String
});

// 'infos' is the name of the collection in db Users
const connectionModel = new mongoose.model("info", connectionSchema);
/*
existing admin account:
id:enzo
psw:123password
*/

http.listen(4200, () => {
    console.log('Serveur lancé sur le port 4200');
});

// initialisation du chemin d'acces
app.use(express.static(__dirname + '/front/'));

// redirections
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/exterieur", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/hall", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/accueil", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/couloir1", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/couloir2", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/bde", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/jnd", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/8eme", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/meeting", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/biblio", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/piano", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/adicode", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/fab", (req, res) => {
    res.sendFile(__dirname + '/front/html/index.html');
});
app.get("/connection", (req, res) => {
    res.sendFile(__dirname + '/front/html/signIn.html');
});




// Après la connection au port
io.on('connection', (socket) => {
    console.log("Utilisateur connecté");

    // Nom d'utilisateur
    socket.on("username", (info) => {
        bdd.getUsername(connectionModel, socket, info[0]);
    });

    // Mot de passe
    socket.on("password", (info) => {
        bdd.getPassword(connectionModel, socket, info[0]);
    });

    // Upload image
    socket.on("upload", (file) => {
        bdd.uploadImage(file[0], file[1]);
    });

    // remove iamge
    socket.on("remove", (file) => {
        bdd.removeImage(file[0]);
    })

    // Get images names
    socket.on("getImagesNames", () => {
        socket.emit("getImagesNames", bdd.getImagesNames().then((infos) => {
            return infos;
          })
          .catch((err) => {
            console.error(err);
          }));
    });

    socket.on("loggedIn", (state) => {
        loggedIn = state;
    });




    // Infos images
    socket.on("uploadImageInfos", (info) => {
        bdd.uploadImageInfos(info[0], info[1], info[2], info[3], info[4], info[5]);
    })

    socket.on("getImageInfos", (info) => {
        socket.emit("getImageInfos", bdd.getImageInfos(info[0]).then((infos) => {
            return infos;
        }) .catch((err) => {
            console.error(err);
        }));
    })
});
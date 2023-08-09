//LEVANTAR EL SERVIDOR
//1. REQUERIR LOS PAQUETES PARA LEVANTAR EL SERVIDOR.
const express = require("express");
const req = require("express/lib/request");
const app = express(); 
const path = require("path");
// poner a escuchar el sevidor
app.use(express.static("public"));
app.listen(3000,()=> console.log("servidor escuchando en el puerto 3000!"));
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, './views/home.html'));
})
app.get("/registro",(req,res)=> {
    res.sendFile(path.join(__dirname, './views/registro.html'));
});
app.get("/login",(req,res)=> {
    res.sendFile(path.join(__dirname, './views/login.html'));
});
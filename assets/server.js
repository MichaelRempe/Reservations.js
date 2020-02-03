// Dependencies
const people = require ("./people");
const express = require("express");
const app = express(); //create app's server

const PORT = 8080;

//Data
const reservations = [];
const waitingList = [];


//Routes
app.get("/", function(req, res) {
    //Landing Page Served
    res.sendFile("C:/Users/Michael's PC/Desktop/GW/GWU_Bootcamp/inClassWork/Express/15-HotRestaurant/Reservations.js/resources/index.html");
});
app.get("/reserve", function (req, res) {
    // Reservation Form Served
    res.sendFile("C:/Users/Michael's PC/Desktop/GW/GWU_Bootcamp/inClassWork/Express/15-HotRestaurant/Reservations.js/resources/reserve.html");
});
app.get("/tables", function (req, res) {
    // Current Waiting/Reservation Display Served
    res.sendFile("C:/Users/Michael's PC/Desktop/GW/GWU_Bootcamp/inClassWork/Express/15-HotRestaurant/Reservations.js/resources/tables.html");
});

//Form Submission
app.post("/resources/reserve", function(req, res){
    let data = req.body;
    console.log(data);
});

//Listener
app.listen(PORT, ()=>{
    console.log(`App is listening on: http://localhost:${PORT}/`)
})

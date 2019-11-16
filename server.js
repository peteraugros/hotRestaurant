//DEPENDENICES
const express = require("express");
const path = require("path");
const Customer = require('./data/customer');
const Restaurant = require('./data/Restaurant');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var Larry =  new Customer('Larry', 'LARRYSEMAIL', 'Larry');
var Mo =  new Customer('MO', 'MOEMAIL', 'Larry');
var Curly =  new Customer('Curly', 'CurlyEMAIL', 'Larry');
var et =  new Customer('ET', 'EMAIL', 'Larry');
var alf =  new Customer('alf', 'EMAIL', 'Larry');
var drew =  new Customer('Drew B.', 'EMAIL', 'Larry');
var drewa =  new Customer('Drew A.', 'EMAIL', 'Larry');
var drewc =  new Customer('Drew C.', 'EMAIL', 'Larry');
const restaurant = new Restaurant();

restaurant.addCustomer(Larry);
restaurant.addCustomer(Mo);
restaurant.addCustomer(Curly);
restaurant.addCustomer(et);
restaurant.addCustomer(alf);
restaurant.addCustomer(drew);
restaurant.addCustomer(drewa);
restaurant.addCustomer(drewc);


//GET REQUEST
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/make", function(req, res) {
//   res.sendFile(path.join(__dirname, "make.html"));
// });

// app.get("/view", function(req, res) {
//   return res.json(waitlist);
// });
// //POST REQUEST FOR THE VIEW ALL CUSTOMERS
// app.post("/view", function(req, res) {
//   var newCustomer = req.body;

//   console.log(newCustomer);

//   characters.push(newCustomer);

//   res.json(newCustomer);
// });
//TO HAVE A CHECK FOR 5 RESVERVED TABLES
//EVERYONE ELSE GOES TO WAITLIST


// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

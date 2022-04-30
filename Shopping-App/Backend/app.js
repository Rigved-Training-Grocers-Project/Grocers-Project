<<<<<<< HEAD
// import all the functions
let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoClient = require("mongodb").MongoClient;
let PORT = 3001;
let dbURL = "mongodb://localhost:27017";
// start the server 
app.listen(PORT, () => console.log(`Server is running in ${PORT}`));

// apply the middleware
app.use(cors());
app.use(bodyParser.json());

//create the services for contact app
// storing the users 
app.post("/users", (request, response) => {
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) {
            throw error;
        } else {
            let db = client.db("grocery");
            let users = request.body; // _id, name, phone, dob, password, contacts:[];
            db.collection("users").insertOne(users, (err, res) => {
                if(err) {
                    response.status(409).json({"message":`users ${users._id} exists`})
=======
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoClient = require('mongodb').MongoClient;

let PORT = 3001;
let dbUrl = 'mongodb://localhost:27017';

let app = express();
app.listen(PORT, () => console.log(`Server is Running at ${PORT}`));

app.use(cors());
app.use(bodyParser.json());

app.post("/product", (request, response) => {
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) {
            throw error;
        } else {
            let db = client.db('Grocerydb');
            let product = request.body;
            db.collection('products').insertOne(product, (err, res) => {
                if (err) {
                    response.status(400).json({'message': `${err}`});
>>>>>>> master
                } else {
                    response.status(201).json(res);
                    client.close();
                }
            });
        }
    });
});
<<<<<<< HEAD
=======

app.delete('/product/:id', (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if(error) {
            throw error;
        } else {
            let db = client.db('Grocerydb');
            db.collection('products').deleteOne({_id: id}).then((doc) => {
                if(doc != null) {
                    response.status(200).json(doc);
                } else {
                    response.status(404).json({"message": 'Sorry Id is Wrong'});
                }
                client.close();
            });
        }
    });
}); 

app.put('/product/:id/price/:num', (request, response) => {
    let id = parseInt(request.params.id);
    let price = parseInt(request.params.num);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if(error) {
            throw error;
        }else {
            let db = client.db('Grocerydb');
            db.collection('products').updateOne({_id: id}, {$set:{price: price} })
                .then((doc) => {
                    response.json(doc);
                    client.close();
                });
        }
    });
});

app.put('/product/:id/quantity/:quantity',(request, response) => {
    let id = parseInt(request.params.id);
    let quantity = request.params.quantity;
    mongoClient.connect(dbUrl, {useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }else {
            let db = client.db('Grocerydb');
            db.collection('products').updateOne({_id: id}, {$set: {quantity: quantity} })
                .then((doc) => {
                    response.json(doc);
                    client.close();
                })
        }
    })
});
>>>>>>> master

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
                } else {
                    response.status(201).json(res);
                    client.close();
                }
            });
        }
    });
});

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
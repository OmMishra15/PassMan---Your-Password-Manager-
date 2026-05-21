const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config()
console.log(process.env)


const url = process.env.MONGO_URI || 'mongodb://localhost:27017';
const port = process.env.PORT || 3000;
const client = new MongoClient(url);


const dbName = 'PassMan';

client.connect();
app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

app.post('/', async (req, res) => {
  const password=req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const insertdata=await collection.insertOne(password)
  res.send({success:true, result:insertdata})
});

app.delete('/', async (req, res) => {
  const password=req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const deletedata=await collection.deleteOne(password)
  res.send({success:true, result:deletedata})
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
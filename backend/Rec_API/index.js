const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = 8000;

app.use(cors());

// Connectiong to the database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://brocode0228:BroCode@recursion.r8mmjie.mongodb.net/Recursion');
}

const db = mongoose.connection

db.on('error', (error) => {
  console.error(error);
})

db.once('open', () => {
  console.log('Database is connected');
})

app.use(express.json());

// cust.methods.rem = function details() {

// }
const customer = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
  });
  

const user = mongoose.model('signups', customer)

app.post('/create', async(req, res) => {
    const details = new user({
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
    })

    try{
        const n = await details.save()
        res.status(200).send('Data has been updated')
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
} )

app.get('/password/:email', async (req,res) => {
    try{
        const dets = await user.findOne({email: req.params.email})
        res.status(200).send(dets.pass)
    }
    catch(err){
        res.status(404).json({message: err.message})
    }
})

app.listen(port, () => {
    console.log(`Database is connected to ${port}`)
})
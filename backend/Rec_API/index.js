const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const app = express()
const port = 8000;

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
    pass: String,
    address: String,
    wishlist: [{
       asin: String,
       climate_pledge_freindly: Boolean,
       currency: String,
       is_best_seller: Boolean,
       is_prime: Boolean,
       product_minimum_offer_price: String,
       product_num_offers: Number,
       product_num_ratings: Number,
       product_original_price: String,
       product_photo: String,
       product_price: String,
       product_star_rating: String,
       product_title: String,
       product_url: String
    }],
    orders: [{
        order_id: String,
        status: String
    }]
  });
  

const user = mongoose.model('signups', customer)
var hashedpassword;

app.post('/create', async(req, res) => {
    let password = req.body.pass
    let passe;
    const en = async (password) => {
        try{
            const salt = await bcrypt.genSalt(10);

            const hashpass = await bcrypt.hash(password, salt);

             passe = hashpass
             console.log(passe)
        }
        catch(err){
            res.status(400).json({message: err.message})
        }
    }

    await en(password)
    // console.log(passe)


    const details = new user({
        name: req.body.name,
        email: req.body.email,
        pass: passe,
        address: req.body.address,
        wishlist: {"obj": "busy"}
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
        password = req.body.pass
        const de = async (password) => {
            const isMaatch = bcrypt.compare(password, dets.pass)

            if(isMaatch){
                res.status(200).json({message: password})
            }
            else{
                res.status(400).json({message:"Wrong Password"})
            }
        }

        // res.status(200).send(dets.pass)
        await de(password)
    }
    catch(err){
        res.status(404).json({message: err.message})
    }
})

app.patch('/wishlist/:email', async (req,res) => {
    try{
        const product = req.body.prod
       await user.updateOne({email: req.params.email },{ $push: {wishlist: req.body.prod}})

        res.status(200).json({message: "The Product Has Been Added To The Whislist"})

    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})

app.patch('/order/:email',async (req,res) => {
    try{
        const data = user.findOne({id: req.body.id})
        res.status(200).json(data)

        await user.updateOne({email: req.params.email}, {status: req.body.status})
        res.status(200).send('Order status have been successfully updated')
    }
    catch(err){
        res.status(404).json({message: err.message})
    }
})

app.listen(port, () => {
    console.log(`Database is connected to ${port}`)
})
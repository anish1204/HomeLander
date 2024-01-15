const express = require('express');
const app = express();
const User = require('./models/User');

const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const userAuth = require('./routes/user-route');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
mongoose.connect('mongodb://localhost:27017/homelander').then(() => {
    console.log('MongoDb Connected');
})



//MiddleWares

app.get('/',cors(),bodyParser.json(),async(req,res,next)=>{

})

app.post('/',cors() ,bodyParser.json() ,async (req, res, next) => {
    const [email, password] = req.body;

    try{

        const check = await User.findOne({email:{email}})
        if(check)
        {
            res.json("exist");
        }
        else{
            res.json("notexist")
        }
    }catch(err){ res.json("notexist"); console.log(err);}

});


//SignUp
app.post('/signup' ,bodyParser.json() ,cors() ,async (req, res, next) => {
    console.log(name + ' ' + email);
    const [name,email,phoneno,password] = req.body;
    const data = {
        name:name,
        email:email,
        phoneno:phoneno,
        password:password
    }
    try{

        const check = await User.findOne({email:{email}})
        if(check)
        {
            res.json("exist");
        }
        else{
            res.json("notexist")
            await User.insertMany([data]);
        }
    }catch(err){ res.json("notexist"); console.log(err);}

});


















// app.use('/', (req, res) => {
//     res.send('Working re');
// })


app.listen(5000, () => {
    console.log('App is listening');
})
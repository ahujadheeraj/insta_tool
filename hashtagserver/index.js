const express = require('express');
const app = express();
const final_table = require('./Data/final_table.json');
const tool_table = require('./Data/newhashTagdata.json');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const User = require('./models/Users');



require('./Routes/index.js')(app)

var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const mongoURI = 'mongodb+srv://dheeraj:ahujadheeraj@cluster0-a8tsg.mongodb.net/test?retryWrites=true&w=majority'



mongoose
    .connect(mongoURI,{useNewUrlParser:true})
    .then(()=>console.log("database connected"))
    .catch(()=>console.log(err))


app.get('/', (req,res) => {
  console.log("requested at /");
    res.json(final_table)
    console.log(res.json);
})


app.post('/users/register', (req, res) => {
  console.log("requested at /users/register")
  const userData = {
    email: req.body.email,
    password: req.body.password,
    category:req.body.category,
    instagram:req.body.instagram,
    pinterest:req.body.pinterest,
    youtube:req.body.youtube
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        console.log("no user found with this username")
        console.log(userData);
        bcrypt.hash(req.body.password, 10)
          
            .then((hash)=>{
             console.log("creating new user with this username")
              console.log(hash);

              userData.password = hash
              User.create(userData,(err,user)=>{
                if(err){console.log(err);}
                else{
                  console.log(user)
                }
              })
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
app.post('/users/login',(req,res)=>{
  console.log("requested at /login")
  User.findOne({
      email:req.body.email
  })
  .then(user=>{
      if(user){
          if(bcrypt.compareSync(req.body.password,user.password)){
              const payload = {
                  _id:User._id,
                  first_name:User.first_name,
                  last_name:User.last_name,
                  email:User.email
              }
              let token = jwt.sign(payload,'secret',{
                  expiresIn:1400
              })
              console.log(token);
              res.send(token)
          }
          else{
          res.json({error:"user does not exist"})
          }

      }
      else{
          res.json({error:"user does not exist"})
          }
              
  })
  .catch(err=>{
      res.send("error"+err)
  })

})



const Port =  5000
app.listen(Port, () => console.log(`Listening to ${Port}`))

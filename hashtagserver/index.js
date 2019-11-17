const express = require('express');
const app = express();
const final_table = require('./Data/final_table.json');
const tool_table = require('./Data/newhashTagdata.json');

require('./Routes/index.js')(app)
var cors = require('cors')

app.use(cors())

app.use(express.json())

app.get('/', (req,res) => {
  console.log("requested at /");
    res.json(final_table)
    console.log(res.json);
  })



const Port =  5000
app.listen(Port, () => console.log(`Listening to ${Port}`))

const express = require('express');
const app = express();
const final_table = require('./Data/final_table.json');

require('./Routes/index.js')(app)
var cors = require('cors')

app.use(cors())

app.use(express.json())

app.get('/', (req,res) => {
    res.json(final_table)
  })

const Port =  5000
app.listen(Port, () => console.log(`Listening to ${Port}`))

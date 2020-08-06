const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())
app.get('/', (request, response)=>{
    response.json({
        message: 'You did it! You make a call do a node server!',
        by: 'Pablo Rodrigo'
    })
})
app.listen('1234')
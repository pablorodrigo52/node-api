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
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
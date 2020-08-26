const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())
app.get('/', (request, response)=>{
    const table = {
        header: ["#", "Nome", "Cidade", "Estado"],
        body: [
            ["1", "Josefina da Silva", "São Paulo", "SP"],
            ["2", "Felipe de Moraes", "Aracaju", "SE"],
            ["3", "João Paulo", "Aracaju", "SE"],
            ["4", "Manoel Messias", "Copacabana", "RJ"],
            ["5", "João Neto", "Olinda", "Pernambuco"],
            ["6", "Aparecida Ferreira", "Campinas", "SP"],
            ["7", "Luiz Arthur", "Belo Horizonte", "MG"],
            ["8", "Lohany Perpetuo", "Salvador", "BA"],
            ["9", "Terry Jones", "Gramado", "RS"],
            ["10", "Dava Jones", "Capela", "SE"]
        ]
    }

    response.json(table)
})
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
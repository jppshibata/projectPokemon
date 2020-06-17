const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

// se tiver usuario e senha precisa por 
//conectando o db
mongoose.connect('mongodb://localhost:27017',
 {useNewUrlParser: true,
    useUnifiedTopology: true
   });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'não foi possível conectar'));
db.once('open', function(){
console.log('Conexão realizada com sucesso');
});

require('./src/models/Pokedex');

//seta a porta de acesso
app.set('port',3001);
//chama a porta e retorna uma condição para mostrar  a porta que está rodando
const server = app.listen(app.get('port'), ()=>{
console.log (`servidor rodando na porta: ${server.address().port}`);

});

//requisita o acesso a pagina inicial(/) e retorna o valor
app.get('/',(req,res) =>{
return res.send('Hello World')
});



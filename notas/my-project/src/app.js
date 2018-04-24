const express = require('express')

const app = express();

// req -> información con la que se hizo la solicitud
// res -> variable con las funcionalidades para repsonder al cliente
app.get('/',(req,res) => {
    res.send('Hello World from Express JS!!')
});
app.get('/api/v1',(req,res) => {
    //res.send('<h1>ESTE ES MI HTML<h1>')
    console.log('query: ' + req.query.number)
    console.log('query: ' + req.query.nombre)
    const pokenumero = req.query.number

    const rp = require('request-promise');

const options = {
    method: 'GET',
    uri: `http://pokeapi.co/api/v2/pokemon/${pokenumero}`,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}
    if(numero){
        res.json(
            rp(options)
            .then ((response => {
                console.log(); // si no haces parse json te lo devuelve en string
                }))
            .catch( err => {
                console.log("err");
        }))
    }else{res.json("Error 404;")

    }
    //res.json({pokemon : 'Pikachu', no: "125"})
});
app.listen(3000, () => console.log("Example app listening on port 3000"));

//Req. numero de pokemon res: jalar de la api de poke el pokemon y mostrarla
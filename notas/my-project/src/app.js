const express = require('express')
const request = require('request-promise')

const app = express();

// req -> información con la que se hizo la solicitud
// res -> variable con las funcionalidades para repsonder al cliente
app.get('/',(req,res) => {
    res.send('Hello World from Express JS!!')
});

    //res.send('<h1>ESTE ES MI HTML<h1>')
    //console.log('query: ' + req.query.number)
    //console.log('query: ' + req.query.nombre)

app.get('/pokemon',(req,res) => {
    const numero = req.query.numero;
    if(numero){
        const options = {
            method: 'GET',
            uri: `http://pokeapi.co/api/v2/pokemon/${numero}`,
            headers: { 
                'User-Agent' : 'Request-Promise'
            },
            json: true 
        }

        request(options)
            .then(response => {
                jsonResponse = {
                    name : response.name,
                    abilities: response.moves.map( movimientos => { return movimientos.move.name}),
                }
                res.json(jsonResponse)
                console.log('pokemon: ' + req.query.numero)
            })
            .catch(err => res.status(400).send("Number not valid"))
            }else {
                res.status(400).send("Number is required")
            }
});


app.listen(3000, () => console.log("Example app listening on port 3000"));

//Req. numero de pokemon res: jalar de la api de poke el pokemon y mostrarla
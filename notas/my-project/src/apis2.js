
const request = require('request');
const rp = require('request-promise');
i=1;

const options = {
    method: 'GET',
    uri: 'http://pokeapi.co/api/v2/pokemon/'+i,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options)
    .then ((response => {
        while (i<151){
        console.log(response.forms[0].name)
        i++
        } 
     // si no haces parse json te lo devuelve en string
    }))
    .catch( err => {
        console.log("err");
    })
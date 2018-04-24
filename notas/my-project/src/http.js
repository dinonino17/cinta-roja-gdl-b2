const request = require('request')
let noPokemon = 200;
var options = {
    url: 'http://pokeapi.co/api/v2/pokemon/'+ noPokemon,
    headers: {
      'User-Agent': 'request'
    }
};

request(options,(error,response,body) => {
    /*.on('response', function(response) {*/
        let json = JSON.parse(body); //toma un string y lo convierte en formato json
        json.moves.forEach((str,i) => 
            console.log(i+1,str.move.name))
      })


// 1- headbutt 2-double-edge

      //status code 
      // 200 - ok
      // 400 - Algo hiciste mal ( Ej, estas solicitando algo que no existe)
      // 404 - Not found
      // 500 - server
      // 300 - redireccion
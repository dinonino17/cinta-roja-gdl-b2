// 1.Hacer una petición a cualquier pokemon y mostrar sus tipos.
const request = require("request")
const rp = require("request-promise")

const pokemon = 1
const options = {
    method: 'GET',
    uri: `http://pokeapi.co/api/v2/pokemon/${pokemon}`,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options)
    .then(response => {response.types.forEach(tipos => {console.log(tipos.type.name)})})
    .catch(err => console.log("Error"))



/*

2.Hacer una funcion que haga una peticion(Ejemplo: peticionLibro(“i robot”);
http://openlibrary.org/search.json?q=i+robot) buscar un libro y traer el o los autores
*/
const options2 = {
    method: 'GET',
    uri: `http://openlibrary.org/search.json?q=i+robot}`,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options2)
    .then(response => {response.docs.forEach(autores => {if(autores.author_name){console.log(autores.author_name)}})})
    .catch(err => console.log("Error"))
/*
3.Hacer una petición por autor y devolver la lista de sus libros 
(http://openlibrary.org/search.json?author=asimov) */

const options3 = {
    method: 'GET',
    uri: `http://openlibrary.org/search.json?author=george+r+r+martin`,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options3)
    .then(response => {response.docs.forEach(autores => console.log(autores.title_suggest))})
    .catch(err => console.log("Error"))

/*

4.Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver
 el género de la banda deseada
 */
const options4 = {
    method: 'GET',
    uri: `http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse`,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options4)
    .then(response => {console.log(response.artists[0].strGenre)})
    .catch(err => console.log("Error"))

/*
5.Devolver los asteroides que sean potencialmente peligrosos para la tierra de la
semana pasada hasta hoy. 
(https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i)
*/
const options5 = {
    method: 'GET',
    uri: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-23&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i`,
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options5)
    .then(response => {
        response.near_earth_objects.map( dia => {dia.forEach(num =>{console.log(num.name)})})
    })
    .catch(err => console.log("Error"))
/*
6.Hacer una petición a la swapi a un personaje y obtener sus películas.

7.Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos, tamaño y peso */

pokeprim = () => {
    let numero=0;
    let jsonResponse = {};
    while(numero<=151){
        const options = {
            method: 'GET',
            uri: `http://pokeapi.co/api/v2/pokemon/${numero}`,
            headers: { 
                'User-Agent' : 'Request-Promise'
            },
            json: true 
        }
        rp(options)
            .then(response => {return (
                jsonResponse = {
                    nombre : response.forms[0].name,
                    moves: response.moves.map(movenow => {return movenow.move.name}) ,
                    tipos: response.types.map(tipos => {return tipos.type.name}) ,
                    tamano: response.weight,
                }
            )})
            .catch(err => console.log("error"))
            numero++;
}
return jsonResponse;
}
console.log(pokeprim());
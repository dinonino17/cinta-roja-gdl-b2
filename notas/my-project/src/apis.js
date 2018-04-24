//4.Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver
 //el género de la banda deseada

 //http://theaudiodb.com/api/v1/json/1/search.php (?s=muse) Query s=variable = muse busqueda

const request = require('request');
const rp = require('request-promise');

const options = {
    method: 'GET',
    uri: 'http://openlibrary.org/search.json?author=george+r+r+martin',
    headers: { 
        'User-Agent' : 'Request-Promise'
    },
    json: true //Automatically parses the Json string 
}

rp(options)
    .then ((response => {
        console.log(response.artists[0].strGenre); // si no haces parse json te lo devuelve en string
    }))
    .catch( err => {
        console.log("err");
    })


    //3.Hacer una petición por autor y devolver la lista de sus libros 
    //(http://openlibrary.org/search.json?author=asimov)

    rp(options)
        .then ((response => {
        response.docs.forEach(
            (str) => {
                console.log(`${str.title_suggest} - ${str.publish_date}`)   
        })})); // si no haces parse json te lo devuelve en string
    
        .catch(err => {
        console.log("err");
    })
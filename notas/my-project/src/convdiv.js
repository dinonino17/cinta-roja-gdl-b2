const express = require('express')
const rp = require('request-promise')
const app = express();

app.get('/usdtomxn',(req,res) => {
    if(isNaN(req.query.num)){res.status(400).send('num must be a number')}
    if(req.query.num<=0){res.status(400).send('num must be greater than 0 to be a valid convertion')}
    const usd = Number(req.query.num)
    const options = {
        method: 'GET',
        uri: `http://data.fixer.io/api/latest?access_key=3bff0ccb4fc35e75129cec668afd25ae`,
        headers: { 
            'User-Agent' : 'Request-Promise'
        },
        json: true //Automatically parses the Json string 
    }
    rp(options)
        .then(response => {
            let factor =Number(response.rates.MXN)/Number(response.rates.USD)
            console.log(factor);
            res.send(`<h1>${req.query.num} USD equivalen a ${Number(usd/factor).toFixed(2)}</h1>`)
        })
        .catch(err => {return 'Fallo obtener datos del servidor fixer.io'})
})

app.get('/mxntousd',(req,res) => {
    if(isNaN(req.query.num)){res.status(400).send('num must be a number')}
    if(req.query.num<=0){res.status(400).send('num must be greater than 0 to be a valid convertion')}
    const mxn = Number(req.query.num)
    const options = {
        method: 'GET',
        uri: `http://data.fixer.io/api/latest?access_key=3bff0ccb4fc35e75129cec668afd25ae`,
        headers: { 
            'User-Agent' : 'Request-Promise'
        },
        json: true //Automatically parses the Json string 
    }
    rp(options)
        .then(response => {
            let factor =Number(response.rates.MXN)/Number(response.rates.USD)
            console.log(factor);
            res.send(`<h1>${req.query.num} USD equivalen a ${(Number(mxn*factor).toFixed(2))}</h1>`)
        })
        .catch(err => {res.send('Fallo obtener datos del servidor fixer.io')})
       
})
app.listen(8000, () => console.log('App listen on http://localhost:8000/'))
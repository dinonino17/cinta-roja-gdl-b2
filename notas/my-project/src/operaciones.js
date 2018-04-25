const express = require('express')

const app = express();

app.get('/',(req,res) =>{
    res.send('<h1>API para hacer operaciones basicas</h1>')
})
app.get('/sumar',(req,res) =>{
    if (!req.query.num1 || !req.query.num2 ){
        res.status(400).send('num1 and num2 are required')
    }
        const numero1 = Number(req.query.num1);
        const numero2 = Number(req.query.num2);
    if(isNaN(numero1) || isNaN(numero2)){
            res.status(400).send("num 1 and num2 must be a number")
    }
    res.send(`<h1>${numero1 + numero2}</h2>`)
    
})
app.get('/restar',(req,res) =>{
    if (!req.query.num1 || !req.query.num2 ){
        res.status(400).send('num1 and num2 are required')
    }
        const numero1 = Number(req.query.num1);
        const numero2 = Number(req.query.num2);
    if(isNaN(numero1) || isNaN(numero2)){
            res.status(400).send("num 1 and num2 must be a number")
    }
    res.send(`<h1>${numero1 - numero2}</h2>`)
    
})
app.get('/multiplicar',(req,res) =>{
    if (!req.query.num1 || !req.query.num2 ){
        res.status(400).send('num1 and num2 are required')
    }
        const numero1 = Number(req.query.num1);
        const numero2 = Number(req.query.num2);
    if(isNaN(numero1) || isNaN(numero2)){
            res.status(400).send("num 1 and num2 must be a number")
    }
    res.send(`<h1>${numero1*numero2}</h2>`)
    
})
app.get('/dividir',(req,res) =>{
    if (!req.query.num1 || !req.query.num2 ){
        res.status(400).send('num1 and num2 are required')
    }
        const numero1 = Number(req.query.num1);
        const numero2 = Number(req.query.num2);
    if(isNaN(numero1) || isNaN(numero2)){
            res.status(400).send("num 1 and num2 must be a number")
    }
    if(numero2==0){
        res.status(400).send("num 2 must be greater than 0 to divide")
    }
    res.send(`<h1>${numero1/numero2}</h2>`)
    
})


app.listen(8000, () => console.log('App listen on http://localhost:8000/')) 
//es la función de callback que va a realizar una vez arranque el servidor
//sumar?num=1&num2=1
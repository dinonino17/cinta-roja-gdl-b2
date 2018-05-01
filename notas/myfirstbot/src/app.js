//importar dependencias para configurar mi servidor

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=> {
    res.send("<h1>Servidor de mi Chatbot desplegado exitosamente</h1>")
})

app.get('/webhook',(req,res) => {
    //verifica la coincidencia del token
    let token = req.query["hub.verify_token"];
    if (token === "prueba_token"){
        console.log("Webhook verificado")
        res.status(200).send(req.query['hub.challenge'])
    }else{
        //mensaje fallo
        console.error("la verificación ha fallado por que los token no coinciden");
        res.sendStatus(403);
    }
})

app.post('/webhook',(req,res) => {
    //Verificar si el evento viene de una página
    if(req.body.object == "page"){
        //iteramos las entradas
        req.body.entry.forEach(entry => {
            //iteramos todos los eventos
            entry.messaging.forEach(event => {
                if(event.message){
                    console.log(event)
                    proccessEvent(event)
                }
            })
        });
            res.sendStatus(200);
        }
    })
            //iteramos los eventos
function proccessEvent(event){
    const senderId = event.sender.id;
    const message = event.message;
    let response ="";
    if (message.text){
        response ={
            "text": "Echo: "+message.text
        };
    }
    sendMessage(senderId,response)
}
    function sendMessage(senderId,response){
        let requestBody= {
            recipient:{
                id: senderId
            },
            message: response
        }

        request({
            uri:"https://graph.facebook.com/v2.6/me/messages",
            qs:{
                access_token:"EAAIgQmaMl6UBAII7fedw3NyBfvfxAZAUygH8sff9YWky2AwopayztqmkLzviWJ1Cylaj4QVrRGEiIVpuEXVK47dU6akhljIqzBvPZCxYkWoZCWbhmxqjKqfdU6P3BngdWfXFCvwm94yPDjJR64NmyrjhzOZC0JnIXYHx3QmX9gZDZD"
            },
            method: "POST",
            json: requestBody
        },(err,res,body) =>{
            if(!err){
                console.log("Mensaje enviado");
            }else{
                console.error("No se pudo mandar el mensaje" + err);
            }
        });
    }

         

app.listen(3000,() => {
    console.log("App listening on port 3000")
})


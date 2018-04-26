const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


const users = []

users.push({id: 1,name: 'Daniel',lastname: 'Larios',})
users.push({id: 2,name: 'Jaime',lastname: 'Duende',})

app.get('/', (req,res) => {
    res.send('<h1>Mi primer restfulAPI</h1>') //tienes todos los verbos disponibles para una petición
})

app.get('/users/all',(req,res) => {
    res.json(users)
})

app.get('/users',(req,res) => {
    const id = req.query.id
    if (id){
        //TODO devolver solo user solicitado
        const results = users
            .filter(usr => usr.id === id)
        if(results.length > 0){res.json(results[0])}
        else{
            res.status(404).json({error: 'No se encontro usuario',})
        }
    }else{
        res.status(400).json({error: 'Necesitas ingresar un usuario'})
    }   
})

app.post('/users', (req,res) => {
    //const name = req.body.name;
    //const lastName = req.body.lastName;
    const {name, lastName} = req.body
    if(!name || !lastName ){
        res.json({error: 'Name or last name son requeridos'})
    }else{
        const user = { 
            id : users.length + 1,
            name : name,
            lastname: lastName,}
        users.push(user)
        res.status(200).json(user)
    }
})

app.put('/users', (req,res)=>{
    const {id} = req.body
    if(id){
        users.forEach(usr => {
            if(usr.id == id){
                if(req.body.name){
                    usr.name=req.body.name
                }
                if(req.body.lastname){
                    usr.lastname = req.body.lastname
                }
            }
        })
        const results = users
            .filter(usr => {usr.id == id})
            //if results.length >0 ---- res.json(results[0])
            //else usuario no encontrado
            if(results.length > 0){
                res.json(results)
            }else{
                console.log(users)
                res.status(404).json({error : 'usuario no encontrado'})
            }
    }else{
        res.status(400).json({error: "El parametro id es requerido"})}

    })
    

    app.delete('/users', (req,res) => {
        const {id} = req.body
        if (id){
            let userDeleted 
            users.forEach((usr,i) => {
                if (urs.id == id){
                    userDeleted = users.splice(i,1)
                }
            })
            if(userDeleted){
                res.json({result: "success" , id: userDeleted.id})
            }else{res.json({result: "Usuario a borrar no encontrado"})}
            res.json(userDeleted)

        }else{
            res.status(400).json({error: "El parametro id es requerido"})

        }
    })

app.listen(3000, () => {console.log("App listening on port 3000")})

/*
GET - Retornar un usuario
POST - Crear usuario
PUT - Actualizar usuario
DELETE - Borrar usuario
 */
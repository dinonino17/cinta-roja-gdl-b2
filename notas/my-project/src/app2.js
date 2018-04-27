const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://daniel:123@ds161539.mlab.com:61539/users-devf');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conectado");
});

const UsuarioSchema = new mongoose.Schema({
    name: String,
    lastname: String

});

const Usuario = mongoose.model('User', UsuarioSchema);

app.get('/', (req,res) => {
    res.send('<h1>Mi primer restfulAPI conectada a una base de datos Mongo</h1>') //tienes todos los verbos disponibles para una petición
})

app.get('/users/all',(req,res) => {
    Usuario.find( (err, user) => {
        if (err) return console.log(err);
        res.json(user);
    });
})

app.get('/users',(req,res) => {
    const id = req.query.id
    if (id){
        //TODO devolver solo user solicitado
        Usuario.findById(id, (err,user)=> {
            if (err){
                res.json({error: "Usuario no encontrado"})
                return console.log(err)
            }
            console.log(user);
            res.json(user);
        });
    }else{
        res.status(400).json({error: 'Necesitas ingresar un usuario'})
    }   
})

app.post('/users', (req,res) => {
    const {name, lastName} = req.body
    if(!name || !lastName ){
        res.json({error: 'Name or last name son requeridos'})
    }else{
        const user = { 
            name : name,
            lastname: lastName,}
            Usuario.create(user, (err,data) => {
                if (err) {
                    console.log(err)
                }else{
                    console.log(data)
                }
            });
        res.status(200).json(user)
    }
})

app.put('/users', (req,res)=>{
    const {id} = req.body
    if(id){
         if(req.body.name && req.body.lastname){
            const userUpdate = {
                name: req.body.name,
                lastname:req.body.lastname
            }        
         }else{
             if(req.body.name){
                 const userUpdate = {
                     name: req.body.name
                 }
             }
        
            if(req.body.lastname){
                const userUpdate = {
                    lastname: req.body.lastname
                }
            }
         }
        Product.findByIdAndUpdate(id,userUpdate, (err,user)=> {
            if (err){
                return console.log(err)
                res.status(404).json({error : 'usuario no encontrado'})
            } 
            console.log(user);
            res.status(200).json(userUpdate)
        })
    }else{
        res.status(400).json({error: "El parametro id es requerido"})}

    })

    app.delete('/users', (req,res) => {
        const {id} = req.body
        if (id){
            if(req.body.name && req.body.lastname){
                const userUpdate = {
                    name: req.body.name,
                    lastname:req.body.lastname
                }        
             }else{
                 if(req.body.name){
                     const userUpdate = {
                         name: req.body.name
                     }
                 }
             
                if(req.body.lastname){
                    const userUpdate = {
                        lastname: req.body.lastname
                    }
                }
             }
            Product.findByIdAndRemove(id,userUpdate, (err,product)=> {
                if (err) {
                    return console.log(err)
                    res.status(404).json({error: "usuario no encontrado"})
                }
                console.log(product);
                res.status(200).json({error: "usuario eliminado"})
            });
        }else{
            res.status(400).json({error: "El parametro id es requerido"})

        }
    })

app.listen(3000, () => {console.log("App listening on port 3000")})
/*
const Product = mongoose.model('Product', ProductSchema);



Product.create(product1, (err,data) => {
    if (err) {
        console.log(err)
    }else{
        console.log(data)
    }
});
//product1.save si lo quiere shacer de otra manera


//todos
/*Product.find( (err, products) => {
    if (err) return console.log(err);
    console.log(products);
});

//solo gansito

Product.findById("5ae289acfbd1611127558e39", (err,product)=> {
    if (err) return console.log(err)
    console.log(product);
});

//actualizar

const nuevoGans = {
    name: "Gansito",
    description: "Recuerdame",
    price: 23.50
}

Product.findByIdAndUpdate("5ae289acfbd1611127558e39",nuevoGans, (err,product)=> {
    if (err) return console.log(err)
    console.log(product);
});

//borrar
Product.findByIdAndRemove("5ae289acfbd1611127558e39",nuevoGans, (err,product)=> {
    if (err) return console.log(err)
    console.log(product);
});
*/
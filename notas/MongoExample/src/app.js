const mongoose = require('mongoose');
mongoose.connect('mongodb://dinonino:anihilina1@ds159129.mlab.com:59129/devf-example');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conectado");
});

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number

});

const Product = mongoose.model('Product', ProductSchema);


/*
Product.create(product1, (err,data) => {
    if (err) {
        console.log(err)
    }else{
        console.log(data)
    }
});
//product1.save si lo quiere shacer de otra manera
*/

//todos
/*Product.find( (err, products) => {
    if (err) return console.log(err);
    console.log(products);
});
*/
//solo gansito
/*
Product.findById("5ae289acfbd1611127558e39", (err,product)=> {
    if (err) return console.log(err)
    console.log(product);
});
*/
//actualizar

const nuevoGans = {
    name: "Gansito",
    description: "Recuerdame",
    price: 23.50
}

/*Product.findByIdAndUpdate("5ae289acfbd1611127558e39",nuevoGans, (err,product)=> {
    if (err) return console.log(err)
    console.log(product);
});
*/
//borrar
Product.findByIdAndRemove("5ae289acfbd1611127558e39",nuevoGans, (err,product)=> {
    if (err) return console.log(err)
    console.log(product);
});


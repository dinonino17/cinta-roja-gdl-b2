console.log("Hola");

//JSX
const persons = [{
  name:"Ken",
  age:25,
  location: "CDMX"
},
{
  name:"Chubby",
  age:24,
  location: "GDL"
},
{
  name:"Chubby",
  age:24,
}]

const name = "Jorge";
const age = "24"
const address = ""

const getLocation = (personas) => {
  personas.forEach((element) => {
    if (element.location){
      return (<div><h1>{element.name}</h1>,<h1>{element.age}</h1>,<h1>{"Location: " + location}</h1></div>);
      }else{
      return  (<div><h1>{element.name}</h1>,<h1>{element.age}</h1>,<h3>Location: Unknown</h3></div>);
      }
  })
}

const template = 
  <div>
    <p>{getLocation(persons)}</p>
  </div>
const appRoot = document.getElementById('app')

//1 parametro es un template (HTML) -JSX
//2 parametro es donde lo vas a colocar
ReactDOM.render(template,appRoot)
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
},
]

const getLocation = (location) =>{
  if (location.location){
      return <h1>Location: {location.location} </h1>    
  }
  return <h1>Location: Desconocida </h1>
}


var template = (
  <div>
      {persons.map(person=>{
            return(
            <div >
              <h1>{person.name}</h1>
              <h1>Age: {person.age}</h1>
              {getLocation(person)} 
          </div>)
              
          })
      }

  
  </div>
);

const appRoot = document.getElementById('app')

//1 parametro es un template (HTML) -JSX
//2 parametro es donde lo vas a colocar
ReactDOM.render(template,appRoot)
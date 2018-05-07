class Application extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Persons />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Mi App</h1>
                <h2>Subtitulo</h2>
            </div>
        )
    }
}
class Persons extends React.Component{
   render(){
       const persons = 
       [{name:"Ken",
       age:"25",
       location:"CDMx"},
       {name:"Tony",
       age:"25",
       location:"Tepic"},
       {name:"El pirata",
       age:"25",
       location:"Culiacan"}]
       return (
           <div>
               {
                   persons.map((person,i)=>{
                       return <Person 
                       key={i}
                       name={person.name}
                       age={person.age}
                       location={person.location}/>
                   })
               }
           </div>
       )
   }
}

class Person extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>age : {this.props.age}</h2>
                <h3>location: {this.props.location}</h3>
            </div>
        )
    }
}

ReactDOM.render(<Application />,document.getElementById("app"))

"use strict";

console.log("Hola");

//JSX
var persons = [{
  name: "Ken",
  age: 25,
  location: "CDMX"
}, {
  name: "Chubby",
  age: 24,
  location: "GDL"
}, {
  name: "Chubby",
  age: 24
}];

var getLocation = function getLocation(location) {
  if (location.location) {
    return React.createElement(
      "h1",
      null,
      "Location: ",
      location.location,
      " "
    );
  }
  return React.createElement(
    "h1",
    null,
    "Location: Desconocida "
  );
};

var template = React.createElement(
  "div",
  null,
  persons.map(function (person) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        person.name
      ),
      React.createElement(
        "h1",
        null,
        "Age: ",
        person.age
      ),
      getLocation(person)
    );
  })
);

var appRoot = document.getElementById('app');

//1 parametro es un template (HTML) -JSX
//2 parametro es donde lo vas a colocar
ReactDOM.render(template, appRoot);

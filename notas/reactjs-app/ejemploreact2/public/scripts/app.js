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

var name = "Jorge";
var age = "24";
var address = "";

var getLocation = function getLocation(personas) {
  personas.forEach(function (element) {
    if (element.location) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          element.name
        ),
        ",",
        React.createElement(
          "h1",
          null,
          element.age
        ),
        ",",
        React.createElement(
          "h1",
          null,
          "Location: " + location
        )
      );
    } else {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          element.name
        ),
        ",",
        React.createElement(
          "h1",
          null,
          element.age
        ),
        ",",
        React.createElement(
          "h3",
          null,
          "Location: Unknown"
        )
      );
    }
  });
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    getLocation(persons)
  )
);
var appRoot = document.getElementById('app');

//1 parametro es un template (HTML) -JSX
//2 parametro es donde lo vas a colocar
ReactDOM.render(template, appRoot);

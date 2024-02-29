import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", {id: "heading"}, "React tutorial") // heading is an object
// this is react core but we don't use this instead we use jsx

//when we render this to dom then it becomes a html element;

// JSX - is not HTML in JS it is HTML-like or XML-like syntax
// JSX is note javascript it won't work in console it is transpiled before it reaches the JS Engine - 
// this is done by PARCEL - Babel (JSX -> Rect.createElement)
// JSX => React.createElement => React Element - JS Object => HTML Element(render)
// JSX the attribute for JSX is given using camelCase
// To write it in multiple line wrap it with small brackets ()

const jsxheading = <h1 className="head">Heading using JSX</h1>;  // It is also an object

// React component
// Class based component - OLD
// functional component - NEW - first character capital - which returns a react element

// const HeadingComponent = () => {
//   return <h1>Namaste React functional component</h1>;
// }

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste Raact using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{100 + 200}</h2>
    <h1>Namaste React functional component</h1>
  </div>
);

// {} we can write any piece of javascript inside this same way we can include react element inside JSX 

// <Title /> and <Title></Title>  and {Title()} are equivalent

// The above example is for component composition where a component is used inside other component

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading); // This will replace not append // here jsxheading is a react element

root.render(<HeadingComponent />) // This is syntax for react component
/* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>   to pass sibling make the third argument an array
        <h2>I'm a h2 tag</h1>
    </div>
    <div id="child2">
        <h1>I'm a h1 tag</h1>   to pass sibling make the third argument an array
        <h2>I'm a h2 tag</h1>
    </div>
</div>  */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag")]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag")]
  )
  ]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World form React"
// );

// console.log(heading); // heading is an object not a html tag

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // converts the heading object into html tag and then.....

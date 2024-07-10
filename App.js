/**
 * 
 * <div id="parent">
 *  <div id="child1s">
 *      <h1>I'm an H1 Tag</h1>
 *      <h2>I'm an H2 Tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm an H1 Tag</h1>
 *      <h2>I'm an H2 Tag</h2>
 *  </div>
 * </div>
 * 
 * React.createElement => Object => root.render => HTML(Browser Understands)
 * 
 * 
 */

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I'm an H1 tag"), React.createElement("h2", {}, "I'm an H2 tag")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm an H1 tag"), React.createElement("h2", {}, "I'm an H2 tag")])])

const heading = React.createElement("h1",
    {
        id: 'heading',
        xyz: 'abc'
    },
    "Hello World from React!");

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
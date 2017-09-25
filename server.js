/**
 * This server will serve the component in many different forms.
 * Don't use the npm module directly(expect in script tag) but the dist folder produced
 * since you would have a circular dependency for this project.
 *  
 */
const express = require("express");
const bodyParser = require('body-parser');
const ReactDOMServer  = require("react-dom/server");
const React  = require("react");
var createReactClass = require('create-react-class');
var ReactReviews = require('./dist/index.js').default;



var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3001);
console.log("Port: " + process.env.PORT + " mode:  " + process.env.NODE_ENV);
app.use(express.static("dist"));

/**
 * This will import the UMD module.
 */
app.get('/', (req, res) => {
    //const element = React.createFactory(Reviews)({});
    console.log("Reviews: " + ReactReviews);
    const element = React.createFactory(ReactReviews)();
    const out = ReactDOMServer.renderToString(element,{});
    console.log("Output: " + out);
    res.send(out);
});

/**
 * This is just a simple test run
 */
app.get('/test', (req, res) => {
    
        var Greeting = createReactClass({
            render: function() {
              return React.createElement('div', null, `Hello`);;
            }
        });
        const element = React.createFactory(Greeting)();
        const out = ReactDOMServer.renderToString(element,{});
        console.log("Output: " + out);
        res.send(out);
    });

app.listen(app.get("port"), () => {});
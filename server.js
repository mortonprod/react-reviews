"use strict"
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
const request = require('request-promise')
var createReactClass = require('create-react-class');
var expressValidator = require('express-validator');
var reactReviews = require('./dist/index.js').Reviews;

const PORT = 3000;
const options = {
    method: 'GET',
    uri: 'https://randomuser.me/api/?results=50',
    json: true 
}
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.set("port", process.env.PORT || 3000);
app.use("/__documentation/", express.static("./docs"));
app.use("/", express.static("dist"));

if (process.env.NODE_ENV === "development"){
    console.log("Add cross origin");
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        next();
    });
}else{
    console.log("No cross origin");   
}

/**
 * This will import the UMD module.
 */
app.get('/', (req, res) => {
    //const element = React.createFactory(Reviews)({});
    //console.log("Reviews: " + JSON.stringify(reactReviews));
    const element = React.createFactory(reactReviews)();
    const out = ReactDOMServer.renderToString(element,{});
    console.log("Output: " + out);
    res.send(out);
});

app.get('/fakes', (req, res) => {
    request(options).then(function (response) {
      console.log("fakes " + response);
      res.send(response);
    }).catch(function (err) {
        throw(Error(err));
    })
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
/**
 * When we post the review we do some basic validation and then print to screen.
 * Can add your mongodb or other database code here.
 */
app.post('/review', function(req, res) {
    req.checkBody('name', 'Invalid name').isAlpha().escape();
    req.checkBody("email", "Enter a valid email address.").isEmail().escape();
    req.sanitizeBody('message').escape();
    var errors = req.validationErrors();
    if (errors) {
        console.log("Errors " + JSON.stringify(errors));
    }
    else {
        console.log("No Errors " + JSON.stringify(req.body));
        /**
         * Add your database code here.
         */
    }
});

app.listen(app.get("port"), () => {});
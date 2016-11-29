"use strict";
var express = require('express');
var path = require('path');
if (process.env.NODE_ENV === "development") {
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('../webpack.config.js');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.entry.index.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");
    var proxy = require('proxy-middleware');
    var url = require('url');
}
var app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.get('/', function (req, res) {
    res.send(renderFullPage());
});
app.set('port', process.env.PORT || 3000);
if (process.env.NODE_ENV === "development") {
    var server_1 = new WebpackDevServer(webpack(config), {
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: "/bundle/",
        stats: { colors: true }
    });
    server_1.listen(8081, "localhost", function () { });
    app.use('/bundle', proxy(url.parse('http://localhost:8081/bundle')));
}
var server = app.listen(app.get('port'), function () {
});
function renderFullPage() {
    return "\n    <!doctype html>\n    <html>\n      <head>\n        <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n        <title>Start of blog</title>\n      </head>\n      <body>\n        <div id=\"root\"></div>\n        <script src=\"/bundle/vendor.bundle.js\"></script>\n        <script src=\"/bundle/index.js\"></script>\n      </body>\n    </html>\n    ";
}

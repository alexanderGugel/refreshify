var http = require('http');

var httpServer = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    this.pendingResponses.push(res);
});

function refresh() {
    this.pendingResponses.forEach(function (res) {
        res.end();
    });
    this.pendingResponses = [];
}

var server = Object.create(httpServer);
server.pendingResponses = [];
server.refresh = refresh;

module.exports = server;

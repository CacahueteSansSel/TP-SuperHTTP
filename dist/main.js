"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var http_1 = require("http");
function main() {
    var hostname = '0.0.0.0';
    var port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT) : 8000;
    var server = http_1.default.createServer(function (req, res) {
        if (req.url === '/ping' && req.method === 'GET') {
            var json = JSON.stringify(req.rawHeaders);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(json);
            return;
        }
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('');
    });
    server.listen(port, hostname, function () {
        console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
    });
}
main();

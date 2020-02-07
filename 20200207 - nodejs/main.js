"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const u = require("./utility");
const http = require("http");
var list = ["ciao", "its", "andrea", "dottor"];
var listOrdered = _.sortBy(list, x => x);
listOrdered.forEach(s => {
    console.log(s);
});
console.log(u.add(3, 10));
// ==========================================
http.createServer((req, res) => {
    if (req.url == "/api") {
        res.writeHead(200, "application/json");
        res.write(JSON.stringify(list));
        res.end();
    }
    else {
        res.writeHead(200, "text/plain");
        res.end("ciao ITS");
    }
    console.log("url: " + req.url);
}).listen(5000);

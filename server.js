var express = require('express');
var cors = require('cors');

var app = express();

//Cors stands for Cross-Origin Resource Sharing. It allows the relaxation of security applied to api.
var corOptions = {
    origin: "http://localhost:8081"
}
console.log("http://localhost:8081");
console.log('The project is running');

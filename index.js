var express = require('express');
var bodyParser = require('body-parser');
var faker = require('faker');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(9090, function () { console.log('The server is working') });

app.get('/', function (req, res) {
    res.json('Api is working')
})

app.post('/', function (req, res) {
    let ammount = 1

    if (typeof req.body.ammount != 'undefined')
        ammount = req.body.ammount

    let reqKeys = Object.keys(req.body.fields)
    let jsonData = [];

    for (i = 0; i < ammount; i++) {
        var obj = {}
        reqKeys.forEach(function (item, index) {
            obj[item] = _getFakeData(req.body.fields[item])
        })

        console.log(obj)
        jsonData.push(obj);
     }

    res.json(jsonData)
});

function _getFakeData(stringFaker) {
    stringFaker = stringFaker.toString()
    try {
        let listFakerSegments = stringFaker.split('.')
        return faker[listFakerSegments[0]][listFakerSegments[1]]()
    } catch (e) {
        console.log(e)
        return stringFaker
    }
}
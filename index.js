const express = require("express");
const app = express();
const { json } = require("express");

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.post('/pageview', (req, res) => {
    req.on('data', data => {
        data = JSON.parse(data.toString());
        console.log('url: '+ data.url);
        console.log('th_app_id: '+ data.th_app_id);
    });
    res.statusCode = 200;
    res.send({code: 0});
});

app.post('/pageloadDuration', (req, res) => {
    req.on('data', data => {
        data = JSON.parse(data.toString());
        console.log('url: '+ data.url);
        console.log('th_app_id: '+ data.th_app_id);
        console.log('duration: '+ data.duration);
    });
    res.statusCode = 200;
    res.send({code: 0});
});

app.post('/networkRequestMonitor', (req, res) => {
    req.on('data', data => {
        data = JSON.parse(data.toString());
        console.log('url: '+ data.url);
        console.log('th_app_id: '+ data.th_app_id);
        console.log('duration: '+ data.duration);
        console.log('httpCode: '+ data.httpCode);
    });
    res.statusCode = 200;
    res.send({code: 0});
});

app.post('/clickElement', (req, res) => {
    req.on('data', data => {
        data = JSON.parse(data.toString());
        console.log('elementId: '+ data.elementId);
        console.log('th_app_id: '+ data.th_app_id);
        console.log('productId: '+ data.productId);
    });
    res.statusCode = 200;
    res.send({code: 0});
});

app.listen(3306, _ => {
    console.log("serve listen on 3306");
});
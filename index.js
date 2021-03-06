const express = require("express");
const bodyParser = require('body-parser')
const dayjs = require("dayjs")


const app = express();

app.use(bodyParser.json())

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.post('/pageview', (req, res) => {
    const bodyData = req.body
    const ip = req.headers["x-real-ip"]  || res.connection.remoteAddress
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss")+ `  ${ip}  [pageview]  [${bodyData.th_app_id}] url:${bodyData.url}`, )

    res.statusCode = 200;
    res.send({code: 0});
});

app.post('/pageloadDuration', (req, res) => {
    const bodyData = req.body
    const ip = req.headers["x-real-ip"]  || res.connection.remoteAddress
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss")+ `  ${ip} [pageloadDuration] [${bodyData.th_app_id}] duration:${bodyData.duration}ms url:${bodyData.url}`, )
    res.statusCode = 200;
    res.send({code: 0});
});

app.post('/networkRequestMonitor', (req, res) => {
    const bodyData = req.body
    const ip = req.headers["x-real-ip"]  || res.connection.remoteAddress
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss")+ `  ${ip} [networkRequestMonitor] [${bodyData.th_app_id}] duration:${bodyData.duration}ms httpCode:${bodyData.httpCode} url:${bodyData.url}`, )
    res.statusCode = 200;
    res.send({code: 0});
});

app.post('/clickElement', (req, res) => {
    const bodyData = req.body
    const ip = req.headers["x-real-ip"]  || res.connection.remoteAddress
    console.log(dayjs().format("YYYY-MM-DD HH:mm:ss")+ `  ${ip} [clickElement] [${bodyData.th_app_id}] productId:${bodyData.productId} elementId:${bodyData.elementId}`, )
    res.statusCode = 200;
    res.send({code: 0});
});

app.listen(3306, _ => {
    console.log("serve listen on 3306");
});
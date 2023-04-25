const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('api/db.json');
const port = process.env.PORT || 9000;

app.use('', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

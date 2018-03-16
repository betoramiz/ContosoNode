const express = require('express');
const route = express.Router();

let students = require('../models/student').students;

route.get('/', (req, res) => {
    res.render('./students/list', { students : students });
});


route.get('/add', (req, res) => {
    res.render('./students/add');
});

route.post('/add', (req, res) => {
    res.send("Add Student to student list");    
});

module.exports = route;
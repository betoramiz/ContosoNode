const express = require('express');
const route = express.Router();

let students = require('../models/student').students;

route.get('/', (req, res) => {
    res.render('./students/list', { students : students });
});

module.exports = route;
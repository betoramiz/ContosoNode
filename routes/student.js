const express = require('express');
const route = express.Router();
const studentController = require('../controllers/student');

route.get('/', studentController.ListStudent);


route.get('/add', studentController.AddStudent);

route.post('/add', studentController.AddStudentPost);

module.exports = route;
const express = require('express');
const route = express.Router();
const studentController = require('../controllers/student');

route.get('/', studentController.ListStudent);


route.get('/add', studentController.AddStudent);

route.post('/add', studentController.AddStudentPost);

route.get('/detail/:id', studentController.DetailStudent);

route.get('/update/:id', studentController.UpdateStudent);

route.post('/update', studentController.UpdateStudentPost);

module.exports = route;
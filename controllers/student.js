let students = require('../models/student').students;

exports.ListStudent = (req, res) => {
    res.render('./students/list', { students : students });
};

exports.AddStudent = (req, res) => {
    res.render('./students/add');
};

exports.AddStudentPost = (req, res) => {
    res.send("Add Student to student list");    
};
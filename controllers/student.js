let students = require('../models/student').students;

exports.ListStudent = (req, res) => {
    res.render('./students/list', { students : students });
};

exports.AddStudent = (req, res) => {
    res.render('./students/add');
};

exports.AddStudentPost = (req, res) => {
    //validate if req is ok    
    if(req.body.name && req.body.lastname && req.body.grade)
    {
        let studentsOrdered = students.sort((a, b) => a.Id < b.Id);
        let {0: last} = studentsOrdered;
        
        let student = {
            Id : last,
            Name : req.body.name,
            LastName : req.body.lastname,
            Grade : req.body.grade
        };

        students.push(student);

        res.redirect('/student/');
    }    
    else
        throw Error("Input invalido");
};
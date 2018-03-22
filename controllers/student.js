let students = require('../models/student').students;

exports.ListStudent = (req, res) => {
    res.render('./students/list', { students : students });
};

exports.AddStudent = (req, res) => {
    res.render('./students/add', {errors: req.session.errors});
};

exports.AddStudentPost = (req, res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let grade = req.body.grade;
    
    //validate if req is ok
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('lastname', 'LAst Name is required').notEmpty();
    req.checkBody('grade', 'Grade is required').notEmpty();
    
    let errors = req.validationErrors();    
    if(errors)
    {
        req.session.errors = errors;
        res.redirect('/student/add');
    }
    else{
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
};
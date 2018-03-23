let students = require('../models/student').students;

exports.ListStudent = (req, res) => {
    res.render('./students/list', { students : students });
};

exports.AddStudent = (req, res) => {                
    console.log(req.session);
     res.render('./students/add', {success : req.session.success, errors: req.session.errors});
    req.session.success = true;
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
        req.session.success = false;
        res.redirect('/student/add');
    }
    else{
        req.session.success = false;

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

exports.DetailStudent = (req, res) => {
    let userId = req.params.id;
    let student = students.find(x => x.Id == userId);
    if(student == undefined || student == null)
        res.render('notfound');
    else
        res.render('./students/detail', {student : student});
};

exports.UpdateStudent = (req, res) => {
    let userId = req.params.id;
    let student = students.find(x => x.Id == userId);
    if(student == undefined || student == null)
        res.render('notfound');
    else
        res.render('./students/update', {student : student});
};

exports.UpdateStudentPost = (req, res) => {
    let userId = req.body.Id;
    let student = students.find(x => x.Id == userId);
    student.Name = req.body.Name;
    student.LastName = req.body.LastName;
    student.Grade = req.body.Grade;
    res.redirect('/student');
};
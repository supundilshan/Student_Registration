const express = require('express');
const studntRoutes = express.Router();

let Student = require('./studentModule');

// store
studntRoutes.route('/add').post(function(req,res){
    let student = new Student(req.body);
    // console.log(req.body);
    student.save()
    .then(student => {
        res.status(200).json({'student':'student is added'}); 
    })
    .catch(err =>{
        res.status(400).send("unable to save to DB");
    });

})

// get data
studntRoutes.route('/').get(function(req,res){
    Student.find(function(err,student){
        if(err)
            console.log(err);
        else{res.json(student);
        }
    });
});

// edit
studntRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Student.findById(id,function(err,student){
        res.jason(student);
    });
});

// update
studntRoutes.route('/update/:id').post(function(req,res){
    let id = req.params.id;
    Student.findById(id,function(err,student){
        if(!student)
            res.status(404).send("data is not found");
        else{
            student.studentName =req.body.studentName;
            student.StudentNIC=req.body.StudentNIC;
            student.StudentExamType=req.body.StudentExamType;
            student.studentExamYear=req.body.studentExamYear;

            student.save().then(student=>{
                res.json('Update Complete');
            })
            .catch(err=>{
                res.status(400).send("unable to update DB");
            });
        }
    });
});

//delete
studntRoutes.route('/delete/:id').get(function(req,res){
    Student.findByIdAndRemove({_id:req.params.id}, function(err,student){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studntRoutes;

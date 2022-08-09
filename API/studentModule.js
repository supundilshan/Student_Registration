const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    studentName:{type:String},
    StudentNIC :{type:String},
    StudentExamType:{type:String},
    studentExamYear:{type:String}
},{
    collection:'student'
});

module.exports = mongoose.model('Student', Student);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class editComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangestudentName = this.onChangestudentName.bind(this);
        this.onChangeStudentNIC = this.onChangeStudentNIC.bind(this);
        this.onChangeStudentExamType = this.onChangeStudentExamType.bind(this);
        this.onChangestudentExamYear = this.onChangestudentExamYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            studentName:'',
            StudentNIC :'',
            StudentExamType:'',
            studentExamYear:''
        }
    }

    componentDidCatch(){
        axios.get('http://localhost:4000/student/edit' + this.prop.match.params.id)
        .then(response=>{
            this.setState({
                studentName:response.data.studentName,
                StudentNIC :response.data.StudentNIC,
                StudentExamType:response.data.StudentExamType,
                studentExamYear:response.data.studentExamYear
            });
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onChangestudentName(e){
        this.setState({
            studentName : e.target.value
        })
    }
    onChangeStudentNIC(e){
        this.setState({
            StudentNIC : e.target.value
        })
    }
    onChangeStudentExamType(e){
        this.setState({
            StudentExamType : e.target.value
        })
    }
    onChangestudentName(e){
        this.setState({
            studentExamYear : e.target.value
        })
    }
    onChangestudentExamYear(e){
        this.setState({
            studentName : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            studentName: this.state.studentName,
            StudentNIC :this.state.StudentNIC,
            StudentExamType:this.state.StudentExamType,
            studentExamYear:this.state.studentExamYear
        };

        axios.post('http://localhost:4000/student/update' + this.props.match.params.id, obj)
        .then(res=>console.log(res.data));

        this.props.history.push('/index')
    }


    render() {
        return (
            <div>
                edit
            </div>
        );
    }
}

// editComponent.propTypes = {

// };

export default editComponent;
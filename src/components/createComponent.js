import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class createComponent extends Component {
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

    onChangestudentName(e){
        this.setState({
            studentName : e.target.value
        });
        // console.log(e.target.value);
    }
    onChangeStudentNIC(e){
        this.setState({
            StudentNIC : e.target.value
        });
        // console.log(e.target.value);
    }
    onChangeStudentExamType(e){
        this.setState({
            StudentExamType : e.target.value
        });
        // console.log(e.target.value);
    }
    onChangestudentExamYear(e){
        this.setState({
            studentExamYear : e.target.value
        });
        // console.log(e.target.value);
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            studentName: this.state.studentName,
            StudentNIC :this.state.StudentNIC,
            StudentExamType:this.state.StudentExamType,
            studentExamYear:this.state.studentExamYear
        };

        // console.log(obj);
        axios.post('http://localhost:4000/student/add', obj).then(res=>console.log(res.data));

        this.setState({
            studentName:'',
            StudentNIC :'',
            StudentExamType:'',
            studentExamYear:''
        })
    }

    render() {
        return (
            <div style={{marginTop:10}}>
                <h3>add new business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label> Student Name : </label>
                        <input type="text" className='form-control'
                                value={this.state.studentName}
                                onChange={this.onChangestudentName}/>
                    </div>
                    <div className='form-group'>
                        <label>Student NIC No : </label>
                        <input type="text" className='form-control'
                                value={this.state.StudentNIC}
                                onChange={this.onChangeStudentNIC}/>
                    </div>
                    <div className='form-group'>
                        <label>Exam Type (OL or AL) : </label>
                        <input type="text" className='form-control'
                                value={this.state.StudentExamType}
                                onChange={this.onChangeStudentExamType}/>
                    </div>
                    <div className='form-group'>
                        <label>Examination Year : </label>
                        <input type="text" className='form-control'
                                value={this.state.studentExamYear}
                                onChange={this.onChangestudentExamYear}/>
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Register" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        );
    }
}

// createComponent.propTypes = {

// };

export default createComponent;
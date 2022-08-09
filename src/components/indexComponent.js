import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import TableRow from './TableRow';

class indexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {student:[]}

    }

    // componentWillMount() {

    // }

    componentDidMount() {
        axios.get('http://localhost:4000/student')
        .then(response=>{
            // console.log(response.data)
            this.setState({student : response.data});
            // console.log("in get")
            // console.log(this.state.student);
        })
        .catch(function (error){
            console.log(error);
        });
    }
    // tabRow(){
    //     return this.state.student.map(function(object, i){
    //         return <TableRow obj={object} key={i}/> ;
    //     });
    // }

    render() {
        return (
            <div>
                <h2 align = "center"> Registered Students List</h2>
                {/* {this.state.student} */}
                <table className='table table-striped' style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th> Student Name</th>
                            <th> Student NIC No</th>
                            <th> Student Exam Type</th>
                            <th> Student Exam Year</th>
                            <th colSpan="2"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.student.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.studentName}</td>
                                    <td>{data.StudentNIC}</td>
                                    <td>{data.StudentExamType}</td>
                                    <td>{data.studentExamYear}</td>
                                    <td> <button className='btn btn-primary'> Edit </button> </td>
                                    <td> <button className='btn btn-primary'> Delete </button> </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default indexComponent;
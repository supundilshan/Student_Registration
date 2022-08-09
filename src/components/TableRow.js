import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td> {this.props.obj.studentName} </td>
                    <td> {this.props.obj.StudentNIC} </td>
                    <td> {this.props.obj.StudentExamType} </td>
                    <td> {this.props.obj.studentExamYear} </td>
                    <td> <button className='btn btn-primary'> Edit </button> </td>
                    <td> <button className='btn btn-primary'> Delete </button> </td>
                </tr>
            </div>
        );
    }
}

export default TableRow;
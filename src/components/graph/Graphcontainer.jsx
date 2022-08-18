import React, { Component } from 'react';
import AllGraphs from './AllGraphs';
import './graphstyles.css'

class Graphcontainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            subject:"science"
        }
    }

    onclickHndler = (e) =>{
        this.setState({
            subject:e.target.value
        })
    }
    
    render() {
        return (
            <div className='grphcontainer'>
                <button className='scibtn' onClick={this.onclickHndler} value="science" style={{}}> Science </button>
                <button className='matbtn' onClick={this.onclickHndler} value="maths"> Mathematics </button> 
                <AllGraphs subject = {this.state.subject}/>
            </div>
        );    
    }
}

export default Graphcontainer;
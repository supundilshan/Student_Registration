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
            subject:e.target.value,
        },console.log(this.state.subject))
    }
    
    render() {
        return (
            <div className='main-container'>
                <button className = {this.state.subject == "science"? "science":"scibtn" } onClick={this.onclickHndler} value="science"> Science </button>
                <button className = {this.state.subject == "maths"? "maths":"matbtn" } onClick={this.onclickHndler} value="maths"> Mathematics </button> 
                
                <div className="graph-comment-container">
                    <AllGraphs subject = {this.state.subject}/>
                </div>
            </div>
        );    
    }
}

export default Graphcontainer;
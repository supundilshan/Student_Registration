import React, { Component } from 'react';
import './AllGraphsStyles.css';

class AllGraphs extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <div className="graphContainer">
                    <h2>{`graphs ${this.props.subject}`}</h2>
                </div>
                <div className="commentContainer">
                    <h2>{`comments ${this.props.subject}`}</h2>
                </div>

            </div>
        );
    }
}

export default AllGraphs;
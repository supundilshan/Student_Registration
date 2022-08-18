import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import TableRow from './TableRow';
import './styles/indexStyle.css';
import Login from './login/Login';
import Signin from './signin/Signin';

class indexComponent extends Component {
    render() {
        return (
            <div>
                <div className="poster-container">
                    <div className='poster-introduction'>
                        <p>Mathematics is used in science for modeling phenomena, which then allows predictions to be made from experimental laws. </p>
                        <p>The independence of mathematical truth from any experimentation implies that the accuracy of such predictions depends only on the adequacy of the model.</p>
                        <p>Inaccurate predictions, rather than being caused by incorrect mathematics, imply the need to change the mathematical model used.</p>
                    </div>
                </div>
                <div className="login-form-container">
                    <div className='logins row'>
                        <div className="login col-md-6">
                            <h3>If you are a student please log in using student login</h3>
                            <Login role="Students"/>
                        </div>
                        <div className="login col-md-6">
                            <h3>If you are a teacher or tutor please log in using teachers login</h3>
                            <Login role="Teachers"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default indexComponent;
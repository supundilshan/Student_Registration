import React, { Component } from 'react';
import './SigninStyles.css'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            email:'',
            password:'',
            confpassword:'',
        }
    }

    onChangehandler = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    onSubmithandle = () =>{
        alert(JSON.stringify(this.state))
    }
    
    render() {
        return(
        <div className='signin-container'>
                <div className="signin-title"> 
                    <h1 className='title'>SIGNIN</h1>
                </div>
                <div className="signin-form">
                <form onSubmit={this.onSubmithandle}>
                    <div className="form-group">
                        <label>User Name </label>
                        <input name="username" type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangehandler}
                            />    
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            value={this.state.email}
                            onChange={this.onChangehandler}
                            />
                        <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name='password'
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.onChangehandler}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Conform Password</label>
                        <input name='confpassword'
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='concorm password'
                            value={this.state.confpassword}
                            onChange={this.onChangehandler}
                            />
                    </div>
                
                    <button type="submit" className="btn signin-btn">
                        Signin
                    </button>
                </form>
                </div>
            </div>
        )

    }
}

export default Signin;
import React, {Component} from 'react';
import {APIURL} from '../../config';
import {Redirect, Link} from 'react-router-dom';

import './Password.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            valid: true,
            submit: false,
            redirectToReferrer: false
        };
    }

    signIn = () => {
        fetch(`${APIURL}/api/users/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.token);
                this.props.setToken(res.token);
                this.setState({...this.state, redirectToReferrer: true});
            });

        console.log(this.state.username, this.state.password);
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    checkPassword = (event) => {
        event.preventDefault();
        this.state.password === this.state.passwordConfirm
            ? this.setState({valid: true, submit: true})
            : this.setState({valid: false, submit: true});
    };

    render() {
        //Adding redirect code after sign in

        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to='/api/users' />;
        }

        return (
            <div className='form'>
                <h1 className= 'htext'>Sign In</h1>
                <form onSubmit={this.checkPassword}>
                    <input
                        type='text'
                        placeholder='Username'
                        id='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        id='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <Link to='/signup' className='button-text'>
                        Sign Up
                    </Link>
                    <button type='submit' onClick={this.signIn} className= 'button'>
                        Sign In
                    </button>
                    {this.state.submit && (
                        <p className={this.state.value ? 'valid' : 'invalid'}>
                            {this.state.valid ? 'password matched' : 'password do not match'}
                        </p>
                    )}
                    {!this.state.submit}
                </form>
            </div>
        );
    }
}

export default SignIn;

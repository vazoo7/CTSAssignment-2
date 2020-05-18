

import PrivacyPolicy from './PrivacyPolicy'


import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class LoginForm extends Component {
    constructor(props){
        super(props);

        let loggedIn = false;
        this.state={
            email:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this);
        this.submitForm=this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm(e){
        e.preventDefault();
        const {email,password} = this.state

        if(email==="user@gmail.com" && password==="user123")
        {this.setState({
            loggedIn:true
        })}
        if(email !=="user@gmail.com" || password !=="user123")
        {
            alert("UserName or Password is Incorrect")
        }
    }

    render() {
        if(this.state.loggedIn){
               return <Redirect to="/welcome"/>
        }

        return (
            <form onSubmit={this.submitForm}>
        <fieldset className="fieldset">
            <div className="FormGroup__3 formGroup__2">
                <label htmlFor="sign_up_form_email" className="FormGroupLabel">
                    {this.props.email}
                </label>
            <div className="inputWrapper">
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="Input"/>
            </div>
            </div>
            
        <div className="FormGroup__3 formGroup__2">
        <label htmlFor="sign_up_form_password" className="FormGroupLabel">
            {this.props.password}
        </label>
        <div className="inputWrapper__1WcSn7pm4PiUUt2d3hgszk">
            <input type="password"  name="password" value={this.state.password} onChange={this.onChange} className="Input"/>
        </div>
    </div>


<button type="submit" className="basicBtn btn btn-brand-purple large submitButton btn-brand-red" >
    {this.props.button}
</button>


<PrivacyPolicy/>
</fieldset>
</form>
        );
    }
}

export default LoginForm;
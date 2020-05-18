import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class Logout extends Component {
    render() {
        alert("Successfully Logged Out")
        return (
            <div>
                <Redirect to="/"/>
            </div>
        );
    }
}

export default Logout;
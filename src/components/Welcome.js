import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>WELCOME</h1>
                <Link to="/logout" >LogOut</Link>
            </div>
        );
    }
}

export default Welcome;
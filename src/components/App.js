


import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Welcome from './Welcome'
import Logout from './Logout'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={A}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/logout" component={Logout}/>
            </Switch>
        );
    }
}

const A = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

export default App;
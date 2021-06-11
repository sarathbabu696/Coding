import React, { Component } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//import Interceptor from "../../services/services";

import Login from '../../../modules/login/login';
import Home from '../../../modules/home/home';

const history = createBrowserHistory();

class Cover extends Component {
    constructor(props) {
		super(props);

	}
	
  	render() {
		return (
            <div>
                <Router history={history}>
                    <Switch>        
                        <Route path='/login' component={Login} exact/>  
                        <Route path='/home' exact component={Home} />  
                    </Switch>
                </Router>
            </div>
		);
  	}
}

export default Cover

import React, {Component} from 'react'; 
import Interceptor from "../../common/services/services";
import './login.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange(e, type){
        if(type == "username"){
            this.setState({ username: e.target.value })
        }
        else{
            this.setState({ password: e.target.value })
        }
    }

    validateUser(){
        Interceptor.getUserCredential().then(response => {
            
            let actualUserData = response.data;
            if((actualUserData.username !== this.state.username) ||
            (actualUserData.password !== this.state.password) ){
                    alert("Invalid username or Password")
            }else{
                window.location.href = '/home';
            }
        }).catch(error => { });
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <h4>User Login</h4>
                    <div className="input-contaner">
                        <div>
                            <p className="label">Username: </p>
                            <input type="text" className="input-text" value={this.state.username} onChange={e => this.handleChange(e,"username")} />
                        </div>
                        <div>
                            <p className="label">Password: </p>
                            <input type="password" className="input-text" value={this.state.password} onChange={e => this.handleChange(e,"password")} />
                        </div>
                        <div>
                            <p className="label">&nbsp; </p>
                            <button type="button" className="btn btn-search mr-4 pl-3 pr-3 mt-3" onClick={() =>
                                                            this.validateUser()
                                                        } >Login</button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Login;
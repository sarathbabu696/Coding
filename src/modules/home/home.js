import React, { Component } from 'react';
import Interceptor from "../../common/services/services";

import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            userUpdate: null,
            username: '',
            age: '',
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    handleChange(e, type){
        if(type == "username"){
            this.setState({ username: e.target.value })
        }
        else{
            this.setState({ age: e.target.value })
        }
    }

    getUserData() {
        Interceptor.getAllUsers().then(response => {
            if (localStorage.getItem("allUsers") === null) {
                localStorage.setItem("allUsers", JSON.stringify(response.data));
            }
            this.showUserData();
        }).catch(error => { });
    }

    showUserData() {
        let users = JSON.parse(localStorage.getItem("allUsers"));
        this.setState({ allUsers: users, userUpdate: true })
    }

    addUser(){
        let userDetails = [];
        userDetails = JSON.parse(localStorage.getItem("allUsers"));
        let userObj = {
            "name": this.state.username,
            "age": this.state.age
        };
        userDetails.push(userObj)
        localStorage.setItem("allUsers", JSON.stringify(userDetails));
        this.showUserData();
    }


    render() {
        if (this.state.userUpdate == null) {
            return null;
        }
        return (
            <div>
                <div className="container">
                    <div className="input-contaner">
                        <h4>Users List</h4>
                        <div className="add-container">
                            <span>
                                <p className="label">Username: </p>
                                <input type="text" className="input-text" value={this.state.username} onChange={e => this.handleChange(e, "username")} />
                            </span>
                            <span>
                                <p className="label">Password: </p>
                                <input type="password" className="input-text" value={this.state.age} onChange={e => this.handleChange(e, "password")} />
                            </span>
                            <span>
                            <p className="label">&nbsp; </p>
                                <button type="button" className="btn btn-search mr-4 pl-3 pr-3 mt-3" onClick={() =>
                                                            this.addUser()
                                                        } >Add</button>
                            </span>
                        </div>

                        <div>
                            <ol>
                                {this.state.allUsers.map((user, i) => {
                                    return (
                                        <li key={i}>
                                            Name :{user.name} , Age: {user.age}
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
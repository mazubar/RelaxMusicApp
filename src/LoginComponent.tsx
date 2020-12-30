import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import {dataService} from "./DataService";
import { useHistory } from "react-router-dom";

export function LoginComponent () {

    let [login, changeLogin] = useState("");
    let [password, changePassword] = useState("");
    const history = useHistory();

    async function onLoginClicked(){
        let authorized = await dataService.login(login,password);
        if (authorized){
            history.push("/");

        }

    }

    return (
        <div>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center form_container">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input value = {login} onChange = {event =>changeLogin(event.target.value)} type="text" name="" className="form-control input_user"
                                           placeholder="username"/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input value = {password} onChange = {event =>changePassword(event.target.value)} type="password" name="" className="form-control input_pass"
                                           placeholder="password"/>
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button onClick={onLoginClicked} type="button" name="button" className="btn login_btn">Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}
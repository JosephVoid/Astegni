import React from 'react'
import Ellipse from './assets/ellipse.svg'
import './css/signup.css'

class Login extends React.Component{
    render(){
        return(
            <div className = "main">
                <div className = "the-circle">
                    <img src = {Ellipse}></img>
                </div>
                <div className = "sign-up-form">
                    <p>Login</p>
                    <form>
                        <div className = "input-container">
                            <p>Username</p>
                            <input type = "text" name="username" autoComplete="off"></input>
                        </div>
                        <div className = "input-container">
                            <p>Password</p>
                            <input type = "password" name="password" autoComplete="off"></input>
                        </div>
                        <button>Log in</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Login
import React from 'react'
import Ellipse from './assets/ellipse.svg'
import './css/signup.css'

class Signup extends React.Component{
    render(){
        return(
            <div className = "main">
                <div className = "the-circle">
                    <img src = {Ellipse}></img>
                </div>
                <div className = "sign-up-form">
                    <p>Signup</p>
                    <form>
                        <div className = "input-container">
                            <p>Name</p>
                            <input type = "text" name="name" autoComplete="off"></input>
                        </div>
                        <div className = "input-container">
                            <p>Username</p>
                            <input type = "text" name="username" autoComplete="off"></input>
                        </div>
                        <div className = "input-container">
                            <p>Password</p>
                            <input type = "password" name="password" autoComplete="off"></input>
                        </div>
                        <div className = "input-container">
                            <p>Date of birth</p>
                            <input type = "date" name="date" autoComplete="off"></input>
                        </div>
                        <div style={{display:"flex",justifyContent:"center"}} className = "input-container">
                            
                            <input id="malec" type="radio" name="gender" value="male" checked></input>
                            <label for="malec">Male</label>
                            <input id="femalec" type="radio" name="gender" value="female"></input>
                            <label for="femalec">Female</label>
                        </div>
                        <div className = "input-container">
                            <p>Subject #1</p>
                            <input type = "text" name="username" autoComplete="off"></input>
                        </div>
                        <div className = "input-container">
                            <p>Subject #2</p>
                            <input type = "text" name="username" autoComplete="off" placeholder="Optional"></input>
                        </div>
                        <button>Sign up</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Signup
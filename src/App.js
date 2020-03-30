import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Signup from './Signup'
import './css/index.css'


class App extends React.Component{
    render(){
        return(
            <div>
                <div className = "overlay"></div>
                <NavBar/>
                <Home/>
                <Signup/>
            </div>
        )
    }
}

export default App
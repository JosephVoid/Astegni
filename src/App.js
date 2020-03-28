import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import './css/index.css'


class App extends React.Component{
    render(){
        return(
            <div>
                <div className = "overlay"></div>
                <NavBar/>
                <Home/>
            </div>
        )
    }
}

export default App
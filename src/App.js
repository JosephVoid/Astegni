import React from 'react'
import NavBar from './NavBar'
import './css/index.css'


class App extends React.Component{
    render(){
        return(
            <div className="main">
                <NavBar/>
            </div>
        )
    }
}

export default App
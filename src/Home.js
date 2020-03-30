import React from 'react'
import './css/home.css'
import Ellipse from './assets/ellipse.svg'


class Home extends React.Component{
    render(){
        return(
            <div style = {{display:"none"}} className = "main">
                <div className = "main-text">
                    <p className = "header-text" >Quality tutors,<br></br>Quality knowledge</p>
                    <p className = "secondary-text">We offer verified and highly skilled tutors from all over Ethiopia.</p>
                    <div className = "search">
                        <t>Find the best tutors around</t><br></br>
                        <input type = "text" name = "search-subject" placeholder = "Subject"></input>
                        <a href="#" type="button">Search 
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path id="ic_arrow_forward_24px" d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z" transform="translate(-4 -4)" fill="#fff"/>
                            </svg>
                            
                        </a>
                    </div>
                </div>
                <div className = "illustrations">
                    <img className = "background-e" src={Ellipse}></img>
                </div>
            </div>
        )
    }
}

export default Home
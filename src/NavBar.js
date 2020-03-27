import React from 'react'
import Logo from './assets/Logo.svg'
import Icon from './assets/Nav-burger.svg'
//import Anime from 'animejs/lib/anime.es'
import './css/navbar.css'

class NavBar extends React.Component{
    
    render(){
        
        function hclick(p){
            if(!document.getElementById(p).lastElementChild.classList.contains('active'))
                document.getElementById(p).lastElementChild.classList.add('active')
            document.getElementsByClassName("item")[1].lastElementChild.classList.remove('active')
            document.getElementsByClassName("item")[2].lastElementChild.classList.remove('active')
            
            document.getElementsByClassName("item")[1].style.cssText += "color:black;font-weight:400"
            document.getElementsByClassName("item")[2].style.cssText += "color:black;font-weight:400"
            
            document.getElementById(p).style.cssText += "color: #1A7A53;font-weight:900"
        }
        function sclick(p){
            if(!document.getElementById(p).lastElementChild.classList.contains('active'))
                document.getElementById(p).lastElementChild.classList.add('active')
            document.getElementsByClassName("item")[0].lastElementChild.classList.remove('active')
            document.getElementsByClassName("item")[2].lastElementChild.classList.remove('active')

            document.getElementsByClassName("item")[0].style.cssText += "color:black;font-weight:400"
            document.getElementsByClassName("item")[2].style.cssText += "color:black;font-weight:400"

            document.getElementById(p).style.cssText += "color: #1A7A53;font-weight:900"
        }
        function lclick(p){
            if(!document.getElementById(p).lastElementChild.classList.contains('active'))
                document.getElementById(p).lastElementChild.classList.add('active')
            document.getElementsByClassName("item")[0].lastElementChild.classList.remove('active')
            document.getElementsByClassName("item")[1].lastElementChild.classList.remove('active')

            document.getElementsByClassName("item")[0].style.cssText += "color:black;font-weight:400"
            document.getElementsByClassName("item")[1].style.cssText += "color:black;font-weight:400"

            document.getElementById(p).style.cssText += "color: #1A7A53;font-weight:900"
        }
        return(
            
            <nav className = "nav-bar">
                <div className = "logo">
                    <img src = {Logo} alt = "Logo"></img>
                </div>
                <div className = "list-container">
                    <div id="ho" className = "item home" onClick={() => hclick("ho")}>
                        <a href="#">Home</a>
                        <hr className = "select-slider active"></hr>
                    </div>
                    <div id="su" className = "item sign-up" onClick={() => sclick("su")}>
                        <a href="#">Become a tutor</a>
                        <hr className = "select-slider"></hr>
                    </div>
                    <div id="li"  className = "item log-in" onClick={() => lclick("li")}>
                        <a href="#">Login</a>
                        <hr className = "select-slider"></hr>
                    </div>
                </div>
                <div className = "nav-burger">
                    <img src = {Icon} alt = "burger"></img>
                </div>
            </nav>
        )
        
    }
        
    
}

export default NavBar
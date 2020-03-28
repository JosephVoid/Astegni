import React from 'react'
import Logo from './assets/Logo.svg'
import Icon from './assets/Nav-burger.svg'
import Iconx from './assets/close.svg'
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
        function sideBar(){
            var SDB = document.getElementById("sdb");
            SDB.style.transform = "translate(0%,30%)"
            document.getElementById("nb").style.display = "none"
            document.getElementById("nc").style.display = "block"
            document.getElementsByClassName("overlay")[0].style.display = "block"
        }
        function sideBarClose(){
            var SDB = document.getElementById("sdb");
            SDB.style.transform = "translate(0%,-100%)"
            document.getElementById("nb").style.display = "block"
            document.getElementById("nc").style.display = "none"
            document.getElementsByClassName("overlay")[0].style.display = "none"
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
                    <img id="nb" src = {Icon} alt = "burger" onClick={sideBar}></img>
                    <img id="nc" src = {Iconx} alt = "burger" onClick={sideBarClose}></img>
                </div>
                <div id="sdb" className = "sidebar">
                    <ul>
                        <li>
                            <a href = "#">Home</a>                        
                        </li>
                        <hr></hr>
                        <li>
                            <a href = "#">Become a tutor</a>                        
                        </li>
                        <hr></hr>
                        <li>
                            <a href = "#">Login</a>                        
                        </li>
                    </ul>
                </div>
            </nav>
        )
        
    }
        
    
}

export default NavBar
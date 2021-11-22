import React, { Component } from 'react';
import '../../src/App.css';
import logo from "../img/HAU.png"
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        const buttonStyle = {
            marginLeft:"1500px",
            backgroundColor:"maroon",
            height:"50px",
            width:"200px",
            color: "white"
        }
       

        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md">
                        <div>
                            <a href="/" className ="navbar-brand">
                            <img src={logo} alt="logo" />
                            
                            <Link className ="btn btn-info" to ={"/students"} style ={buttonStyle} > Adding Student</Link>
                            </a>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
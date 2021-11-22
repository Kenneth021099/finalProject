import React, { Component } from 'react';
import '../../src/App.css';
import logo from "../img/HAU.png"

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md">
                        <div>
                            <a href="/" className ="navbar-brand">
                            <img src={logo} alt="logo" />
                            </a>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
import React, { Component } from 'react';
import ('../../src/App.css');

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md">
                        <div>
                            <a href = "https://javaguides.net" className = "navbar-band">
                                Student Management Application
                            </a>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
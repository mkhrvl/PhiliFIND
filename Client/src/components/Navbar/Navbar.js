import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

//, using class instead of function to utilize state
class Navbar extends Component {
    state = { clicked: false }

    // sets the opposite state upon click
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className='wrapper'>
                <nav className='navbar-items'>
                    <div className='navbar-logo'><a href="/home">PhiliFIND</a></div>
                    <div className="nav-menuicon" onClick={this.handleClick}>
                        {/* Displays icon depending on the clicked state */}
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {/* creates list items from MenuItems.js */}
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
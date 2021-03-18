import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="header">
                <h1>Randy's Pub</h1>
                <ul className="list">
                    <NavLink exact to='/' 
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#755eea"
                    }}
                    >Home
                    </NavLink>
                    <NavLink exact to='/beer'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#755eea"
                    }}
                    >Beers</NavLink>
                </ul>
            </header>
        </div>
    );
}

export default Header;
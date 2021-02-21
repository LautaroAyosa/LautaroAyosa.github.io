import React from 'react';
import {NavLink, Link} from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {

    return (
        
        <div class="nav-margin">
            <nav class="rubikMono">
                <Link to='/'><img class="logo" src=".\img\logo horizontal PNG textoNegro.png" alt="logo tintorería OMBÚ"/></Link>
                <div>
                    <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/ombu-app"
                    >
                        Home
                    </NavLink>
                    <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                    >
                        Contactanos
                    </NavLink>
                    <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/aboutUs"
                    >
                        Nosotros
                    </NavLink>
                </div>
                {/* <ul>
                    <a href='/'><li id='home'>Home</li></a>
                    <a href='/contact'><li id='contact'>Contactanos</li></a>
                    <a href='/aboutUs'><li id='aboutUs'>Nosotros</li></a>
                </ul> */}
            </nav>
        </div>
        
    )
}

export default NavBar
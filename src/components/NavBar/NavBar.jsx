import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

function NavBar() {
    const [clicked, setClicked] = useState(false); 
    
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className={`nav ${clicked? "active" : "" }`}>
            <div className='nav-icon'>
                <a href="/#"><h1>PADEL <span>STORE</span></h1></a>
                <CartWidget />
            </div>
            <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={ handleClick }/>
            <ul className={`nav-link ${clicked? "active" : ""}`}>
                <a href="/#">Paletas</a>
                <a href="/#">Calzado</a>
                <a href="/#">Indumentaria</a>
                <a href="/#">Accesorios</a>
                <a href="/#">Pelotas</a>
                <a href="/#">Bolsos</a>
            </ul>
        </nav>
    )
}

export default NavBar
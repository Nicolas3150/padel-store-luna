import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [clicked, setClicked] = useState(false); 
    
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className={`nav ${clicked? "active" : "" }`}>
            <div className='nav-icon'>
                <NavLink to={'/'}><h1>PADEL <span>STORE</span></h1></NavLink>
                <CartWidget />
            </div>
            <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={ handleClick }/>
            <ul className={`nav-link ${clicked? "active" : ""}`}>
                <li><NavLink to={ 'category/Paletas' } className={nav => nav.isActive ? 'nav-active' : ''}>Paletas</NavLink></li>
                <li><NavLink to={ 'category/Calzado' } className={nav => nav.isActive ? 'nav-active' : ''}>Calzado</NavLink></li>
                <li><NavLink to={ 'category/Indumentaria' } className={nav => nav.isActive ? 'nav-active' : ''}>Indumentaria</NavLink></li>
                <li><NavLink to={ 'category/Accesorios' } className={nav => nav.isActive ? 'nav-active' : ''}>Accesorios</NavLink></li>
                <li><NavLink to={ 'category/Pelotas' } className={nav => nav.isActive ? 'nav-active' : ''}>Pelotas</NavLink></li>
                <li><NavLink to={ 'category/Bolsos' } className={nav => nav.isActive ? 'nav-active' : ''}>Bolsos</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar
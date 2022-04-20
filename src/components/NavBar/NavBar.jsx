import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

function NavBar() {
    return (
        <nav className='nav'>
            <div className='nav-icon'>
                <a href="/#"><h1>PADEL <span>STORE</span></h1></a>
                <CartWidget />
            </div>
            <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={handleOpenBar}/>
            <ul className='nav-link' id='nav-link'>
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

function handleOpenBar(){
    document.getElementById('nav-link').classList.toggle('active');
}
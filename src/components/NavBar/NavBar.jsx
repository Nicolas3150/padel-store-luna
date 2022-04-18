import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <div className='nav'>
            <h1>PADEL <span>STORE</span></h1>
            <ul className='nav-link'>
                <a href="/#">Paletas</a>
                <a href="/#">Calzado</a>
                <a href="/#">Indumentaria</a>
                <a href="/#">Accesorios</a>
                <a href="/#">Pelotas</a>
                <a href="/#">Bolsos</a>
            </ul>
        </div>
    )
}

export default NavBar
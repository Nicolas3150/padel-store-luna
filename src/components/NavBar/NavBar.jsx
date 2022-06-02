import React, { useEffect, useState } from 'react'

import CartWidget from '../CartWidget/CartWidget';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom';

import { db } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore';

import { errorAlert } from '../Alert/Alert';

import './NavBar.css';


function NavBar() {
    const [clicked, setClicked] = useState(false);
    const [categories, setCategories] = useState([]);

    const handleClick = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        const itemCollection = collection(db, 'items')
        getDocs(itemCollection)
            .then(snapshot => {
                let arrayCategory = [];
                snapshot.docs.forEach(doc => {
                    if (arrayCategory.indexOf(doc.data().category) === -1)
                        arrayCategory.push(doc.data().category)
                })
                setCategories(arrayCategory);
            })
            .catch(err => {
                errorAlert('Ha ocurrido un error al cargar los productos.');
                console.log(err)
            })
    }, []);

    return (
        <nav className={`nav ${clicked ? "active" : ""}`}>
            <div className='nav-icon'>
                <NavLink to={'/'}>
                    <h1>PADEL<span> ST<span>O</span>RE</span>
                    </h1>
                    <div className="ball"><span>PADEL STORE</span></div>
                    <div className="shadow"></div>
                </NavLink>
                <CartWidget />
            </div>
            <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={handleClick} />
            <ul className={`nav-link ${clicked ? "active" : ""}`}>
                {categories.map(category =>
                    <li key={category}><NavLink to={`category/${category}`} className={nav => nav.isActive ? 'nav-active' : ''}>{category}</NavLink></li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar
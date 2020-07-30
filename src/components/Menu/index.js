import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={Logo} alt="logo"/>
            </Link>

            <Button as={Link} to= "/" className="button-link">Netflix!</Button>
        </nav>
        );
}

export default Menu;
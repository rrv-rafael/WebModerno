import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/imgs/logo.png';
import './Logo.css';

const logo = props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={imgLogo} alt="logo" />
        </Link>
    </aside>

export default logo
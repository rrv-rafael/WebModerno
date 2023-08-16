import React from 'react';
import imgLogo from '../../assets/imgs/logo.png';
import './Logo.css';

const logo = props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={imgLogo} alt="logo" />
        </a>
    </aside>

export default logo
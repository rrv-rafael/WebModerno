import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="bi bi-house-door-fill"></i> Início
            </Link>
            <Link to="/users">
                <i className="bi bi-people-fill"></i> Usuários
            </Link>
        </nav>
    </aside>

export default nav 
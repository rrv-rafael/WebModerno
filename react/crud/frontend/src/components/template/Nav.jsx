import React from "react";
import './Nav.css';

const nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#">
                <i className="bi bi-house-door-fill"></i> Início
            </a>
            <a href="#/users">
                <i className="bi bi-people-fill"></i> Usuários
            </a>
        </nav>
    </aside>

export default nav 
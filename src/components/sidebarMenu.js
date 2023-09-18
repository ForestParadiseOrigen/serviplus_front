import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        <i className="nav-icon fas fa-th"></i>
                        <p>Inicio</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        <i className="nav-icon fas fa-edit"></i>
                        <p>Tareas</p>
                    </Link>
                </li> 
            </ul>
        </nav>
    );
}

export default SidebarMenu;
import React from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from '../components/sidebarMenu';

const Sidebar = () => {
    return ( 
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        
            <Link to={'#'} className="brand-link px-4">
            <span className="brand-text font-weight-light text-center">Serviplus</span>
            </Link>
            <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                </div>
                <div className="info">
                <Link to={'#'} className="d-block">Menu Principal</Link>
                </div>
            </div>
            
            <SidebarMenu></SidebarMenu>
            
            </div>
        </aside>
    );
}

export default Sidebar;
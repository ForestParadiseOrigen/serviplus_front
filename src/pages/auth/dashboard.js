import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import Boxes from '../../components/boxes';
import Footer from '../../components/footer';

const Dashboard = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <Header
                    tittle={"Dashboard"}
                    breadcrumb_item_1={"Menu principal"}
                    breadcrumb_link_1={"/dashboard"}
                    breadcrumb_item_2={"Dashboard"}
                />
                <Boxes
                    tittle={"Proyectos"}
                    text={"Administrador"}
                    link={"/proyectsAdmin"}
                />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;
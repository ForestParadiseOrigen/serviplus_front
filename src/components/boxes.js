import React from 'react';
import { Link } from 'react-router-dom';

const Boxes = ({tittle, text, link}) => {
    return (
        <div className="row">
            <div className="col-lg-3 col-6 container">
                <div className="small-box bg-info">
                    <div className="inner">
                        <h3>{tittle}</h3>
                        <p>{text}</p>
                    </div>
                <div className="icon">
                    <i className="ion ion-bag"></i>
                </div>
                    <Link to={link} className="small-box-footer">Ver proyectos <i className="fas fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Boxes;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({tittle, breadcrumb_item_1, breadcrumb_link_1, breadcrumb_item_2}) => {
    return (       
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{tittle}</h1>
                    </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to={{breadcrumb_link_1}}>{breadcrumb_item_1}</Link></li>
                        <li className="breadcrumb-item active">breadcrumb_item_2</li>
                    </ol>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
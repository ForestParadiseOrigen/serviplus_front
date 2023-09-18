import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import APIInvoke from '../../utils/APIInvoke';

const ProyectsAdmin = () => {

    const[usuario, setUsuario] = useState([]);

    const cargarUsuarios = async () => {
        const response = await APIInvoke.invokeGET(`/usuario`);
        // console.log(response.usuario);
        setUsuario(response.usuario);
    }

    useEffect(() => {
        cargarUsuarios();
    }, []);

    return ( 
        <div className="wrapper">

            <Navbar></Navbar>

            <Sidebar></Sidebar>

            <div className="content-wrapper">

                <Header
                    tittle={"Proyectos - Administrador"}
                    breadcrumb_item_1={"Menu principal"}
                    breadcrumb_link_1={"/proyectAdmin"}
                    breadcrumb_item_2={"Administrador"}
                />
                
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Registros</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Usuarios registrados</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{width: '10%'}}>Id</th>
                                                <th style={{width: '20%'}}>Nombre</th>
                                                <th style={{width: '20%'}}>Email</th>
                                                <th style={{width: '20%'}}>Contraseña</th>
                                                <th style={{width: '10%'}} className='justify-content-around'>
                                                    <button className='btn btn-info float-start my-1'>Editar</button>
                                                    <button className='btn btn-danger float-end my-1'>Eliminar</button> 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                usuario.map(
                                                    (item) => ( 
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.nombre}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.password}</td>
                                                        </tr>
                                                    )    
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer clearfix">
                                    <ul className="pagination pagination-sm m-0 float-right">
                                    <li className="page-item"><Link className="page-link"></Link></li>
                                    <li className="page-item"><Link className="page-link">1</Link></li>
                                    <li className="page-item"><Link className="page-link">2</Link></li>
                                    <li className="page-item"><Link className="page-link">3</Link></li>
                                    <li className="page-item"><Link className="page-link"></Link></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        <div className="card-footer">
                        Footer
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ProyectsAdmin;
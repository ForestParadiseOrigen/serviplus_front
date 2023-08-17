import React from "react";
import { Link } from "react-router-dom";
const CrearCuenta = () => {
    return (
        <div class="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}><b>Crear Cuenta</b></Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Crear tu nuevo usuario, ¡ahora!</p>
                        <form action="../../index.html" method="post">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nombre completo" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Correo electronico" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Repita su contraseña" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                        
                        <div className="social-auth-links text-center">
                            
                            <button to={"#"} className="btn btn-block btn-primary">
                                
                                Crear Cuenta
                            </button>
                            <Link to={"/"} className="btn btn-block btn-danger">
                                
                                Iniciar Sesion
                            </Link>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>


        </div>);
}

export default CrearCuenta;
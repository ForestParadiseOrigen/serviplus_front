import React , { useState,useEffect} from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    })
    const { nombrePa,email,password,config} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() =>{
        document.getElementById("nombrePa").focus();
    },[])

    const onSubmit= (e) => {
            e.preventDefault()

        }
    

    return (
        <div class="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}><b>Crear Cuenta</b></Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Crear tu nuevo usuario, ¡ahora!</p>
                        
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" 
                                className="form-control" 
                                name="nombrePa"
                                id="nombrePa" 
                                placeholder="Nombre completo"
                                value={nombrePa} 
                                onChange={onChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" 
                                className="form-control" 
                                name="email" 
                                id="email"
                                placeholder="Correo electronico"
                                value={email} 
                                onChange={onChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" 
                                className="form-control" 
                                name="password" 
                                id="password"
                                placeholder="Contraseña"
                                value={password} 
                                onChange={onChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control"
                                nombre="config"
                                id="config"
                                value={config} 
                                onChange={onChange}
                                placeholder="Repita su contraseña" /> 
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                        
                        <div className="social-auth-links text-center">
                            
                            <button type="submit" to={"#"} className="btn btn-block btn-primary">
                                
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
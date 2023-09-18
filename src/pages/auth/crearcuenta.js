import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke  from "../../utils/APIInvoke";
import swal from 'sweetalert';

const CrearCuenta = () => {

    const [usuario , setUsuario] = useState(
        {
            nombre:'',
            email:'',
            password:'',
            confirmar:''
        }
    );
    
    
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario(
            {
                ...usuario,
                [e.target.name]: e.target.value
            }
        )
    }

    useEffect(()=> {
        document.getElementById("nombre").focus();
    }, [])

    const crearCuenta = async () => {

        if(password !== confirmar){
            const msg = 'Las contraseñas no pueden ser diferentes';
            swal({
                title:'Advertencia',
                text: msg,
                icon:'error',
                button:{
                    text:'Vale',
                    value:true,
                    visible:true,
                    className:'btn btn-danger',
                    closeModal: true
                }
            });
        }else if(password.length < 6){
            const msg = 'Las contraseñas deben tener minimo 6 caractéres.';
            swal({
                title:'Advertencia',
                text: msg,
                icon:'error',
                button:{
                    text:'Ok',
                    value:true,
                    visible:true,
                    className:'btn btn-danger',
                    closeModal: true
                }
            });
        }else{
            const data = {
                nombre:usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/usuario`, data);
            console.log(response)

            const msg = 'El usuario ha sido registrado corréctamente.';
            swal({
                title:'Confirmación',
                text: msg,
                icon:'success',
                button:{
                    text:'Ok',
                    value:true,
                    visible:true,
                    className:'btn btn-info',
                    closeModal: true
                }
            });
        }        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return (

        <div className = "hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}><b>Crear Cuenta</b></Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Crear tu nuevo usuario, ¡ahora!</p>

                        <form onSubmit={onSubmit}>

                            <div className="input-group mb-3">
                                <input 
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre completo" 
                                    value={nombre}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={onChange}
                                    placeholder="Correo electronico"
                                    className="form-control"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="input-group mb-3">
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    id="confirmar"
                                    name="confirmar"
                                    type="password"
                                    value={confirmar}
                                    onChange={onChange}
                                    className="form-control"
                                    placeholder="Confirme su contraseña"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                        
                        <div className="social-auth-links text-center">
                            
                            <button
                                to={"#"}
                                className="btn btn-block btn-primary"
                                type="submit"
                            >
                                Crear Cuenta
                            </button>
                            <Link to={"/login"} className="btn btn-block btn-danger">
                                
                                Iniciar Sesion
                            </Link>
                            <Link to={"/"} className="btn btn-block btn">
                                Volver al home
                            </Link>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>


        </div>
        );
}

export default CrearCuenta;
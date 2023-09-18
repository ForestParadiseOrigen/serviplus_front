import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import APIInvoke  from "../../utils/APIInvoke";
import swal from 'sweetalert';

const baseUrl = "http://localhost:4000/usuario";

const Login = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email:'',
    password:''
  });

  const {email, password} = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  const iniciarSesion = async () => {
    if(password.length < 4){
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
            email: usuario.email,
            password: usuario.password
        }
        const response = await APIInvoke.invokePOST(`/usuario`, data);
        console.log(response)

        const msg = 'Bienvenido al sistema.';
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

        const jwt = response.token;

        localStorage.setItem('Item', jwt);

        navigate('/dashboard');
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  }

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

    return (
      <div className="hold-transition login-page"> 
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}>
              <b>Inicio de sesion</b>
            </Link>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                Bienvenido, por favor ingrese su informacion
              </p>
              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Correo electronico"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                  <button
                    to={"#"}
                    type="submit" 
                    className="btn btn-block btn-primary"
                  >
                    Ingresar
                  </button>
                  <Link to={"/register"} className="btn btn-block btn-danger">
                    Crear Cuenta
                  </Link>

                  <Link to={"/recover"} className="btn btn-block btn">
                      ¿Olvidaste tu contraseña?
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Login;
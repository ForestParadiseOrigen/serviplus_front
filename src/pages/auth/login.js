import { Link} from "react-router-dom";
import { Component } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:4000/usuario";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  iniciarSesion = () => {
    Axios.get(baseUrl, {
      params: {
        email: this.state.form.email,
        password: this.state.form.password,
      },
    })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("nombre", respuesta.nombre, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          alert(`Bienvenido al sistema.`);
          window.location.href = "/dashboard";
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="hold-transition login-page"> {/* Use className instead of class */}
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
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Correo electronico"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                  <button
                    type="button" 
                    className="btn btn-block btn-primary"
                    onClick={this.iniciarSesion}
                  >
                    Ingresar
                  </button>
                  <Link to={"/register"} className="btn btn-block btn-danger">
                    Crear Cuenta
                  </Link>

                  <Link to={"/recover"} className="btn btn-block btn">
                      ¿Olvidaste tu contraseña?
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
}

export default Login;
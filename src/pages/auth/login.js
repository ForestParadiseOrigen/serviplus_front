import { Link } from "react-router-dom";
import { Component } from "react";
import Axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:5000/Paciente";
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
        password: md5(this.state.form.password),
      },
    })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("numIdentidadPa", respuesta.numIdentidadPa, { path: "/" });
          cookies.set("nombrePa", respuesta.nombrePa, { path: "/" });
          cookies.set("apellidoPa", respuesta.apellidoPa, { path: "/" });
          cookies.set("tipoDocumentoPa", respuesta.tipoDocumentoPa, { path: "/" });
          cookies.set("numeroPa", respuesta.numeroPa, { path: "/" });
          cookies.set("epsPa", respuesta.epsPa, { path: "/" });
          cookies.set("GeneroPa", respuesta.GeneroPa, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          alert(`Bienvenido al sistema ${respuesta.nombrePa} ${respuesta.apellidoPa}`);
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
                  <Link to={"/crearcuenta"} className="btn btn-block btn-danger">
                    Crear Cuenta
                  </Link>

                  <p className="mb-1">
                    <Link to={"/recover"}>¿Olvidaste tu contraseña?</Link>
                  </p>
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
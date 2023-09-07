import React from "react";
import { Link } from "react-router-dom";
const recover = () => {
    return ( 
<div className="hold-transition login-page">
  <div className="login-box">
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
      </div>
      <div className="card-body">
        <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
        <form action="login.html" method="post">
          <div className="input-group mb-3">
            <input type="password" className="form-control"name="password" id="password" placeholder="nueva contraseña" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" name="password" id="password" placeholder="confirma tu contraseña" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block">cambiar contraseña</button>
            </div>

          </div>
        </form>
        <p className="mt-3 mb-1">
          <Link to={"/"}>iniciar sesion</Link>
        </p>
      </div>

    </div>
  </div>
</div>


    
     );
}
 
export default recover;
import React from 'react'
import './login.css'

function Login() {
    return (
        <body>
        <form className="formulario">
        <h1>Login</h1>
         <div className="contenedor">
             <div className="input-contenedor">
             <i className="fas fa-envelope icon"></i>
             <input type="text" placeholder="Correo Electronico"/>
             </div>
             <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
             <input type="password" placeholder="Contraseña"/>
             </div>
             <input type="submit" value="Login" class="button"/>
             <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
             <p>¿No tienes una cuenta? <a class="link" href="/Register">Registrate </a></p>
         </div>
        </form>
    </body>
    )
}

export default Login
import React from "react";
import './register.css'

function Register() {
    return (
        <form class="formulario">
    
        <h1>Registrate</h1>
         <div class="contenedor">
         
         <div class="input-contenedor">
             <i class="fas fa-user icon"></i>
             <input type="text" placeholder="Nombre Completo"/>
             
             </div>
             
             <div class="input-contenedor">
             <i class="fas fa-envelope icon"></i>
             <input type="text" placeholder="Correo Electronico"/>
             
             </div>
             
             <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
             <input type="password" placeholder="Contraseña"/>
             
             </div>
             <input type="submit" value="Registrate" class="button"/>
             <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
             <p>¿Ya tienes una cuenta?<a class="link" href="/login">Iniciar Sesion</a></p>
         </div>
        </form>
    )}

    export default Register;
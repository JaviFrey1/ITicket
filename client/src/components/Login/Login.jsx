import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import userLogin from '../../actions/login';
import './login.css'

function Login() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: "",
        password: ""
    }) 

    function handleInputChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function handleInputSubmit(e){
        e.preventDefault();    
        dispatch(userLogin(state));
       
    }


    return (
        <body>
        <form className="formulario" onSubmit={(e) => handleInputSubmit(e)}>
        <h1>Login</h1>
         <div className="contenedor">
             <div className="input-contenedor">
             <i className="fas fa-envelope icon"></i>
             <input type="text" name="email" value={state.email} placeholder="Correo Electronico" onChange={(e) => handleInputChange(e)}/>
             </div>
             <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
             <input type="password" name="password" value={state.password} placeholder="Contraseña" onChange={(e) => handleInputChange(e)}/>
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
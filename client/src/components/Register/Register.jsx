import React from "react";
import { useDispatch } from "react-redux";
import './register.css';
import userRegister from "../../actions/register";
import { useState } from 'react';




function Register() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    function handleInputChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function handleInputSubmit(e){
        e.preventDefault();
        console.log('JAJNTJNTJNTJNT')
        dispatch(userRegister(state));
        alert('Te has registrado satisfactoriamente')
    }




    return (
        <form class="formulario" onSubmit={(e) => handleInputSubmit(e)}>
        <h1>Registrate</h1>
         <div class="contenedor">
         
         <div class="input-contenedor">
             <i class="fas fa-user icon"></i>
             <input type="text" value={state.fullName} name= 'fullName' placeholder="Nombre Completo" onChange={(e) => handleInputChange(e)}/>
             
             </div>
             
             <div class="input-contenedor">
             <i class="fas fa-envelope icon"></i>
             <input type="text" value={state.email} name= 'email' placeholder="Correo Electronico" onChange={(e) => handleInputChange(e)}/>
             
             </div>
             
             <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
             <input type="password" value={state.password} name= 'password' placeholder="Contraseña" onChange={(e) => handleInputChange(e)}/>
             
             </div>
             <input type="submit" value="Registrate" class="button" />
            <a href="localhost:3001/google">
             <button> Google </button>
              </a>
             <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
             <p>¿Ya tienes una cuenta?<a class="link" href="/login">Iniciar Sesion</a></p>
            
         </div>
        </form>
    )}

    export default Register;
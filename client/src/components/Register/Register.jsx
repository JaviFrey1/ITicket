import React from "react";
import { useDispatch } from "react-redux";
import s from './register.module.css';
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
        dispatch(userRegister(state));
        alert('Te has registrado satisfactoriamente');
        window.location.replace("http://localhost:3000/login")
    }




    return (
        <div className={s.cont}>
        <form className={s.formulario} onSubmit={(e) => handleInputSubmit(e)}>
        <h1>Registrate</h1>
         <div className={s.contenedor}>
         
         <div className={s.inputContenedor}>
             {/*<i class="fas fa-user icon"></i>*/}
             <input className={s.input} type="text" value={state.fullName} name= 'fullName' placeholder="Nombre Completo" onChange={(e) => handleInputChange(e)}/>
             
             </div>
             
             <div className={s.inputContenedor}>
             {/*<i class="fas fa-envelope icon"></i>*/}
             <input  className={s.input}type="text" value={state.email} name= 'email' placeholder="Correo Electronico" onChange={(e) => handleInputChange(e)}/>
             
             </div>
             
             <div className={s.inputContenedor}>
            {/*<i class="fas fa-key icon"></i>*/}
             <input className={s.input} type="password" value={state.password} name= 'password' placeholder="Contraseña" onChange={(e) => handleInputChange(e)}/>
             
             </div>
             <input className={s.button}  type="submit" value="Registrate"  />
             <div className={s.or}>o con</div>
            <a href="localhost:3001/google">
             <button className={s.button_google}> Google </button>
              </a>
             <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
             <p>¿Ya tienes una cuenta?<a className="link" href="/login">Iniciar Sesion</a></p>
            
         </div>
        </form>
        </div>
    )}

    export default Register;
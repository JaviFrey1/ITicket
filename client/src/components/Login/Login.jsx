import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import userLogin from '../../actions/login';
import s from './login.module.css';
import axios from 'axios';
// import LoginSuccess from '../Nav/Login/Login';

function validate(state){
  let errors = {};
  if(!state.email){
    errors.email = "Ingresa un email"
  }
  else if(!state.password){
    errors.password = "Ingresa una constraseña"
  }
  return errors
}


function Login() {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: ""
  })
  
  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...state,
        [e.target.name]: e.target.value
      })
    )
  }

  function handleInputSubmit(e) {
    e.preventDefault();
    if(!errors.email && !errors.password){
      dispatch(userLogin(state));
    }
  }
  
  const redirectGoogle = async (req, res) => {
    const googleLoginURL = "http://localhost:3001/google"
    const newWindow = window.open(googleLoginURL, "_blank", "width=500,height=600")
    if (newWindow) {
      const timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('Ahora estas autenticado');
          persigueUser();
          window.location.replace("http://localhost:3000/home")
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500)
    }       
  }

  const persigueUser = async () => {
    const res = await axios.get(`http://localhost:3001/loguser`, { withCredentials: true }).catch((error) => {
      console.log("No estuvo bien autenticado");
    });
    if (res && res.data) {
      console.log("User:", res.data)
    }

  }


  return (
    <div className={s.body}>
      <div className={s.formulario} >
     
        <h1 className={s.h1}>Login</h1>
        <div className={s.contenedor}>
        <form onSubmit={(e) => handleInputSubmit(e)}>
          <div className={s.inputcontenedor}>
            <i className="fas fa-envelope icon"></i>
            <input className={s.input} type="text" name="email" value={state.email} placeholder="Correo Electronico" onChange={(e) => handleInputChange(e)} />
          </div>
            {errors.email && (<p className={s.errors}>{errors.email}</p>)}
          <div className={s.inputcontenedor}>
            <i className="fas fa-key icon"></i>
            <input className={s.input} type="password" name="password" value={state.password} placeholder="Contraseña" onChange={(e) => handleInputChange(e)} />
          </div>
            {errors.password && (<p className={s.errors}>{errors.password}</p>)}
          <input type="submit" value="Login" className={s.button} />
          </form>
          
          <hr/>
          <div>
            <button type="none"  className={s.button_google} onClick={() => {redirectGoogle()}}> Google </button>
          </div>
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿No tienes una cuenta? <a className={s.link} href="/Register">Registrate </a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import userLogin from '../../actions/login';
import s from './login.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import forgotPassword from '../../actions/forgotPassword';
// import LoginSuccess from '../Nav/Login/Login';

function validate(state) {
  let errors = {};
  if (!state.email) {
    errors.email = "Ingresa un email"
  }
  else if (!state.password) {
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
  async function handleClick() {
    try {
      const { value: email } = await Swal.fire({
        title: 'Ingresa tu email para cambiar tu contraseña',
        input: 'email',
        inputLabel: 'Te enviaremos un email para confirmar que eres tu',
        inputPlaceholder: 'Ingresa tu email',
        confirmButtonColor: 'rgb(254,204,0)'
      })
      if (email) {
        dispatch(forgotPassword({email}))
        Swal.fire(`Mail enviado a: ${email}`)
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  function handleInputSubmit(e) {
    e.preventDefault();
    if (!errors.email && !errors.password) {
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
          window.location.replace("https://tukiteck-avmo59sxa-tukiteckpf-gmailcom.vercel.app/home")
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500)
    }
  }
  const persigueUser = async () => {
    const res = await axios.get(`/loguser`, { withCredentials: true }).catch((error) => {
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

          <hr />
          <div>
            <button type="none" className={s.button_google} onClick={() => { redirectGoogle() }}> Google </button>
          </div>
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿No tienes una cuenta? <a className={s.link} href="/Register">Registrate </a></p>
          <p>¿Olvidaste tu contraseña? <span className={s.link} onClick={() => handleClick()}>Recuperarla</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import userLogin from '../../actions/login';
import s from './login.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import forgotPassword from '../../actions/forgotPassword';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'


function validate(state) {


  let errors = {};
  if (!state.email || !state.email.includes('@' && '.')) {
    errors.email = "Ingresa un email valido"
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

  const [passwordShown, setPasswordShown] = useState(false)


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
        dispatch(forgotPassword({ email }))
        Swal.fire(`Mail enviado a: ${email}`)
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  async function handleInputSubmit(e) {
    e.preventDefault();
    if (!errors.email && !errors.password) {

      let dis = await dispatch(userLogin(state));
      if (dis.payload.length <= 0) {
        Swal.fire(`Usuario/contraseña incorrecto`)
      } else {
        window.location.replace(dis.payload);
      }
    }
  }
  const redirectGoogle = async (req, res) => {
    const googleLoginURL = "http://localhost:3001/google"
    const newWindow = window.open(googleLoginURL, "_blank", "width=500,height=600")
    if (newWindow) {
      const timer = setInterval(() => {
        if (newWindow.closed) {
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
    });
    if (res && res.data) {
      console.log("User:", res.data)
    }

  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


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
              <div className={s.contPass}>

              <input className={s.input}  type={passwordShown ? "text" : "password"} name="password" value={state.password} placeholder="Contraseña" onChange={(e) => handleInputChange(e)} />
              {passwordShown === false ? <BsFillEyeFill className={s.icon} onClick={() => togglePasswordVisiblity()} />
                : <BsFillEyeSlashFill className={s.icon} onClick={() => togglePasswordVisiblity()} />}
                </div>
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
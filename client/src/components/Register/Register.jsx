import React from "react";
import { useDispatch } from "react-redux";
import s from "./register.module.css";
import userRegister from "../../actions/register";
import { useState } from "react";
import Swal from 'sweetalert2';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'


function validate(state) {
  let errors = {};
  if (!state.fullName) {
    errors.fullName = "Ingresa tu nombre y apellido";
  } else if (!state.email || !state.email.includes('@' && '.')) {
    errors.email = "Ingresa un email valido";
  } else if (!state.password) {
    errors.password = "Ingresa una constraseña";
  } else if (!state.confirmPassword) {
    errors.confirmPassword = "Vuelve a escribir tu constraseña";
  } else if (state.password !== state.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
}

function Register() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [passwordShown, setPasswordShown] = useState(false)
  const [confirmShown, setConfirmShown] = useState(false)


  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  }

 async function handleInputSubmit(e) {
    e.preventDefault();
    if (!errors.fullName && !errors.email && !errors.password && !errors.confirmPassword) {
     let users = await dispatch(userRegister(state));
     if(users.payload.length <= 0){
      Swal.fire("El mail escrito ya existe, por favor utilize uno nuevo");
     } else {
      Swal.fire("registrado correctamente");
      window.location.replace("http://localhost:3000/login");
     }
    }
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleConfirmVisiblity = () => {
    setConfirmShown(confirmShown ? false : true);
};

  return (
    <div className={s.cont}>
      <form className={s.formulario} onSubmit={(e) => handleInputSubmit(e)}>
        <h1>Registrate</h1>
        <div className={s.contenedor}>
          <div className={s.inputContenedor}>
            {/*<i class="fas fa-user icon"></i>*/}
            <input
              className={s.input}
              type="text"
              value={state.fullName}
              name="fullName"
              placeholder="Nombre Completo"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {errors.fullName && <p className={s.errors}>{errors.fullName}</p>}

          <div className={s.inputContenedor}>
            {/*<i class="fas fa-envelope icon"></i>*/}
            <input
              className={s.input}
              type="text"
              value={state.email}
              name="email"
              placeholder="Correo Electronico"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {errors.email && <p className={s.errors}>{errors.email}</p>}

          <div className={s.inputContenedor}>
            <div className={s.contPass}>
            {/*<i class="fas fa-key icon"></i>*/}
            <input
              className={s.input}
              type={passwordShown ? "text" : "password"}
              value={state.password}
              name="password"
              placeholder="Contraseña"
              onChange={(e) => handleInputChange(e)}
            />
             {passwordShown === false ? <BsFillEyeFill className={s.icon} onClick={() => togglePasswordVisiblity()} />
                : <BsFillEyeSlashFill className={s.icon} onClick={() => togglePasswordVisiblity()} />}
                </div>
          </div>

          {errors.password && <p className={s.errors}>{errors.password}</p>}

          <div className={s.inputContenedor}>
            {/*<i class="fas fa-key icon"></i>*/}
            <div className={s.contPass}>

            <input
              className={s.input}
              type={confirmShown ? "text" : "password"}
              value={state.confirmPassword}
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              onChange={(e) => handleInputChange(e)}
            />
            {confirmShown === false ? <BsFillEyeFill className={s.icon} onClick={() => toggleConfirmVisiblity()} />
                            : <BsFillEyeSlashFill className={s.icon} onClick={() => toggleConfirmVisiblity()} />}
                </div>            
          </div>

          {errors.confirmPassword && (
            <p className={s.errors}>{errors.confirmPassword}</p>
          )}

          <input className={s.button} type="submit" value="Registrate" />
          <div className={s.or}>o con</div>
          <a href="localhost:3001/google">
            <button className={s.button_google}> Google </button>
          </a>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta?
            <a className="link" href="/login">
              Iniciar Sesion
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;

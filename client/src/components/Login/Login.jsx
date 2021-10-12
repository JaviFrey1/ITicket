import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import userLogin from '../../actions/login';
import './login.css';
import axios from 'axios';
import GoogleButton from 'react-google-button';


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

    const redirectGoogle = async (req,res) => {
        const googleLoginURL = "http://localhost:3001/google"
        const newWindow = window.open(googleLoginURL, "_blank", "width=500,height=600")
        if(newWindow){
          const timer = setInterval(() => {
            if(newWindow.closed){
              console.log('Ahora estas autenticado');
              persigueUser();
              window.location.replace("http://localhost:3000/home")
              if(timer){
                clearInterval(timer); 
              }
            }
          }, 500)
        }
      }
    
      const persigueUser =  async () => {
        const res = await axios.get(`http://localhost:3001/users`, {withCredentials : true}).catch((error) => {
          console.log("No estuvo bien autenticado");
        });
        if(res && res.data) {
           console.log("User:" , res.data)
        }
    
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
                <div>
                    <GoogleButton onClick={()=>{redirectGoogle()}}/>
                </div>
             <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
             <p>¿No tienes una cuenta? <a class="link" href="/Register">Registrate </a></p>
         </div>
        </form>
    </body>
    )
}

export default Login
import  React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserDetail from "../../actions/getUserDetail";
import Swal from 'sweetalert2'
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css";
import updateUserPass from "../../actions/updateUserPass";
import s from "./userDetail.module.css"



export default function UserDetail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id
  const userDetail = useSelector((state) => state.userDetail);
  const [password, setPassword] = useState('');
  
  function handleClick(id){
    const input = document.querySelector('#password');
       function toggle(){
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('bi-eye');
   };
  Swal
  .fire({
      title: "Ingresa la nueva contraseña",
      input: <input type="password" name="password" id="password" />,
      togglePasswordButton: <i class="bi bi-eye-slash" id="togglePassword" onClick={()=>toggle()}></i>,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
         setPassword(resultado.value)
        console.log("nueva contraseña, " + password);
      }
  });

 dispatch(updateUserPass(id, password));
  
 }
  useEffect(() => {
    dispatch(getUserDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={`${s.container}`}>
      {userDetail ? (
        <div className={`${s.user}`}>
            <h2>{userDetail.fullName}</h2>
           
            <div onClick={handleClick(id)} className={s.update}>
             Cambiar contraseña
            </div>
       
         
        
         
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}
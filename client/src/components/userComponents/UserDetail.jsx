import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserDetail from "../../actions/getUserDetail";
import Swal from 'sweetalert2'
import resetPassword from "../../actions/resetPassword";
import s from "./userDetail.module.css"
import { useAuth } from '../../context/AuthContext'
import deleteUser from "../../actions/deleteUser";




export default function UserDetail(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const userDetail = useSelector((state) => state.userDetail);
  const { activeUser } = useAuth()


  // function handleClick(id) {
  //   const input = document.querySelector('#password');
  //   function toggle() {
  //     const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  //     input.setAttribute('type', type);
  //     this.classList.toggle('bi-eye');
  //   };
  //   Swal
  //     .fire({
  //       title: "Ingresa la nueva contraseña",
  //       input: <input type="password" name="password" id="password" />,
  //       togglePasswordButton: <i class="bi bi-eye-slash" id="togglePassword" onClick={() => toggle()}></i>,
  //       confirmButtonText: "Guardar",
  //       cancelButtonText: "Cancelar",
  //     })
  //     .then(resultado => {
  //       if (resultado.value) {
  //         resetPassword(resultado.value)
  //         console.log("nueva contraseña, " + password);
  //       }
  //     });
  //   dispatch(resetPassword(id, email));
  // }

  function eliminate() {
    Swal.fire({
      title: "Eliminar cuenta",
      text: "¿Estas Seguro/a?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(activeUser.id))
        history.push('/home')
      }
    });
  }
  useEffect(() => {
    if (activeUser) dispatch(getUserDetail(activeUser.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, activeUser]);
  async function handleClick() {
    try {
      await Swal.fire({
        title: 'Estas seguro que quieres cambiar tu contraseña?',
        showDenyButton: true,
        confirmButtonText: 'Si, quiero.',
        denyButtonText: `Cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Te enviamos un email');
          dispatch(resetPassword(activeUser.id, activeUser.email))
        } else if (result.isDenied) {
          Swal.fire('No cambiaste tu contraseña')
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={s.container}>
      {userDetail ? (
        <div className={s.caja}>
          <div className={s.cajita}>
            <div className={s.titulo}>
              <h2>Mis Datos</h2>
            </div>
            <div className={s.contLow}>
              <div className={s.lowData}>
                <div className={s.name}>
                  <div>Usuario</div>
                  <div>{userDetail.fullName.split(' ')[0]}</div>
                </div>
                <div className={s.name}>
                  <div>Email</div>
                  <div>{userDetail.email}</div>
                </div>
                <div className={s.name}>
                  <div>Contraseña</div>
                  <div>*******************</div>
                </div>
                <div className={s.changeContainer}>
                  {!userDetail.googleId && <div onClick={() => handleClick()} className={s.update}>Cambiar contraseña</div>}
                </div>
                <div className={s.eliminar} onClick={(e) => eliminate(e)}>
                  <h4>Eliminar cuenta</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}
import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserDetail from "../../actions/getUserDetail";
import Swal from 'sweetalert2'
import resetPassword from "../../actions/resetPassword";
import s from "./userDetail.module.css"
import { useAuth } from '../../context/AuthContext'
import deleteUser from "../../actions/deleteUser";
import { useParams } from "react-router";



export default function UserDetail(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const userDetail = useSelector((state) => state.userDetail);
  const { activeUser } = useAuth()

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
  const {id} = useParams()
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
        } else if (result.isDenied) {
          Swal.fire('No cambiaste tu contraseña')
        }
        dispatch(resetPassword(id, activeUser.email))
      });
    }
     catch (e) {
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
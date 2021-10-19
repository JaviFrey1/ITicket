import React, { useState } from "react"
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import confirmPassword from "../../actions/confirmPassword";

import s from './confirmreset.module.css'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'


export default function ConfirmReset() {

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmShown, setConfirmShown]=useState(false)
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const input = document.querySelector('#password');
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
      const toggleConfirmVisiblity = () => {
        setConfirmShown(confirmShown ? false : true);
      };
    const validate = () => {
        if (pass.length > 0) {
            if (pass !== confirm) {
                setErrors("Las contraseñas no coinciden");
            } else {
                setErrors('');
            }
        }
    }
    const handleInput1Change = (e) => {
        setPass(e.target.value);

    }
    const handleInput2Change = (e) => {
        setConfirm(e.target.value);
    }
    const submit = () => {
        validate()
        dispatch(confirmPassword(id,confirm));
        history.push('/home')
    }


    return (
        <div className={s.container}>
            <div className={s.box}>
                <div className={s.contInputs}>
                    <div className={s.contInput}>

                    <input name='pass1' value={pass}
                        autoComplete="off" id='password'
                        type={passwordShown ? "text" : "password"}
                         className={s.input}
                        placeholder="Nueva contraseña"
                        onChange={(e) => handleInput1Change(e)}
                    /> {passwordShown === false ? <BsFillEyeFill  className={s.icon} onClick={() => togglePasswordVisiblity()} />
                        : <BsFillEyeSlashFill  className={s.icon} onClick={() => togglePasswordVisiblity()} />}
                    </div>
                    <div className={s.contInput}>

                    <input name='pass2' value={confirm}
                         type={confirmShown ? "text" : "password"} className={s.input}
                        autoComplete="off"
                        placeholder="Reingresa la contraseña"
                        onChange={(e) => handleInput2Change(e)}
                    />{confirmShown === false ? <BsFillEyeFill  className={s.icon} onClick={() => toggleConfirmVisiblity()} />
                    : <BsFillEyeSlashFill  className={s.icon} onClick={() => toggleConfirmVisiblity()} />}
                    </div>
                    <div>
                        {errors.length > 0 ? <h5 className={s.error}>{errors}</h5> : null}
                    </div>
                    <button className={s.btn} onClick={() => submit()}>GUARDAR</button>
                </div>
            </div>
        </div >
    )
}
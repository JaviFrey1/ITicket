import React, { useState } from "react"
import s from './confirmreset.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

export default function ConfirmReset() {


    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const [errors, setErrors] = useState('')

    const input = document.querySelector('#password');
    function toggle() {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);

    }
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
        validate();
        setPass('');
        setConfirm('');
        console.log(pass, ' y', confirm)
    }


    return (
        <div className={s.container}>
            <div className={s.box}>
                <div className={s.contInputs}>
                    <input name='pass1' value={pass}
                        autoComplete="off" id='password'
                        type="password" className={s.input}
                        placeholder="Nueva contraseña"
                        onChange={(e) => handleInput1Change(e)}
                    /> {input.type === 'password' ? <BsFillEyeFill onClick={() => toggle()} />
                        : <BsFillEyeSlashFill onClick={() => toggle()} />}
                    <input name='pass2' value={confirm}
                        type="password" className={s.input}
                        autoComplete="off" id='password'
                        placeholder="Reingresa la contraseña"
                        onChange={(e) => handleInput2Change(e)}
                    />
                    <div>
                        {errors.length > 0 ? <h5 className={s.error}>{errors}</h5> : <div>HOLA</div>}
                    </div>
                    <button className={s.btn} onClick={() => submit()}>GUARDAR</button>
                </div>
            </div>
        </div >
    )
}
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Login.scss'

const INITIAL_STATE = {
    email: '',
    password: '',
};

const Login = (props) => {
    const { state } = useLocation();
    const [formData, setFormData] = useState(INITIAL_STATE);

        const submitForm = (e) => {
            e.preventDefault();
            props.loginUser(formData, state ? state.prevRoute : null);
            setFormData(INITIAL_STATE);
        }

        const changeInput = (e) => {
            const { name, value } = e.target;

            setFormData({ ...formData, [name]: value });
        };

  return (
        <div className='Login'>
        <p>Recuerda que esta fiesta es privada, sólo para los alumnos del Bootcamp FullStack (Septiembre 2021) </p>
        <form onSubmit={submitForm}>
            <label>
                <p>Email</p>
                <input type="text" name="email" onChange={changeInput} value={formData.email} />
            </label>
            <label>
                <p>Contraseña</p>
                <input type="password" name="password" onChange={changeInput} value={formData.password} />
            </label>
        
            <div>
                <button className='ButtonLogin'type='submit'>Acceder</button>
            </div>
        </form>
        <p>
            {props.loginError && <div style={{color:'red'}}>{props.loginError}</div>}
        </p>
      
      </div>
  );
}

export default Login;
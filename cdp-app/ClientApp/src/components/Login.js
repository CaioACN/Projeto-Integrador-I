import React from 'react';
import './Login.css';

import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    return (

        <div className="login">

            <div className="login-logo">

                <img
                    src="logo.png"
                    alt="Controle de Publicações" />
            </div>

            <div className="login-rigth">

                <h1> Login </h1>



                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input
                        type="email"
                        placeholder="E-mail: "
                    />
                </div>

                <div className="login-loginInputSenha">
                    <MdLock />
                    <input
                        type="password"
                        placeholder="Senha: "
                    />
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Novo usuário</h4>
                <button type="submit">
                    Cadastrar
                </button>

            </div>
        </div>
    )
}
export default Login;

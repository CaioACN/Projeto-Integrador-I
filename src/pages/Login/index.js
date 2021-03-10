import React from 'react'
import './login.css'

import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <img 
                    src="https://anzuns.org/wp-content/uploads/2018/02/admin_login.png"
                    alt="Controle de Publicações" />
            </div>

            <div className="login-rigth">
                <h1> Login </h1>

                <div className="loginInputEmail">
                   <MdEmail />
                    <input
                        type="text"
                        placeholder="E-mail: "
                    />
                </div>

                <div className="loginInputSenha">
                   <MdLock />
                    <input
                        type="text"
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

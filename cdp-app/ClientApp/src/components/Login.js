import React, { Component } from 'react';

import './Login.css';

import { MdEmail, MdLock } from "react-icons/md";


export class Login extends Component {


    static displayName = Login.name;


    constructor(props) {
        super(props);

    }

    render() {
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

                    
                    <a href="/cadastrarusuario">
                    Novo Usuário
                    </a>

                </div>
            </div>
        );
    }
}

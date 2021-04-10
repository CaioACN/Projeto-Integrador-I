import React, { Component } from 'react';

export class CadastrarUsuario extends Component {


    static displayName = CadastrarUsuario.name;


    constructor(props) {
        super(props);
        this.state = { nome:null,email:null,senha:null };
    }

     changeHandler = (event) => {
         let id = event.target.id;
         let valor = event.target.value;
         this.setState({ [id]: valor });
    }

    salvarNovoUsuario = (event) => {
        event.preventDefault();
        //chamar rest para cadastrar usuário
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <h1>Novo Usuário</h1>
                <form onSubmit={this.salvarNovoUsuario}>
                    <p>


                        <label for="nome">Nome</label>
                        <input type="text" id="nome" onChange={this.changeHandler} />
                    </p>
                    <p>
                        <label for="email">E-mail</label>
                        <input type="text" id="email" onChange={this.changeHandler}/>
                    </p>
                    <p>
                        <label for="senha">Senha</label>
                        <input type="text" id="senha" onChange={this.changeHandler} />
                    </p>

                    <input type="submit" value="Cadastrar"/>
                   
               </form>


            </div>
        );

    }
}

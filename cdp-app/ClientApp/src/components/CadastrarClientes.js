import React, { Component } from 'react';

export class CadastrarClientes extends Component {
  static displayName = CadastrarClientes.name;
  

    constructor(props) {
        super(props);
        this.state = { nome: null, email: null, senha: null };
    }

    changeHandler = (event) => {
        let id = event.target.id;
        let valor = event.target.value;
        this.setState({ [id]: valor });
    }
 
    salvarNovoCliente = async (event) => {
        event.preventDefault();
        //chamar rest para cadastrar cliente
        let postData = JSON.stringify(this.state);


        try {
            let response = await fetch('cliente', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: postData
            });
            let mensagem = await response.json();
            alert(JSON.stringify(mensagem));
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <h1>Novo Cliente</h1>
                <form onSubmit={this.salvarNovoCliente}>
                    <p>


                        <label for="nome">Nome</label>
                        <input type="text" id="nome" onChange={this.changeHandler} />
                    </p>
                    <p>
                        <label for="email">E-mail</label>
                        <input type="text" id="email" onChange={this.changeHandler} />
                    </p>
                    <p>
                        <label for="senha">Senha</label>
                        <input type="text" id="senha" onChange={this.changeHandler} />
                    </p>

                    <input type="submit" value="Cadastrar"  />

                </form>


            </div>
        );

    }
}

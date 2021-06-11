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

    salvarNovoUsuario = async (event) => {
        event.preventDefault();
        //chamar rest para cadastrar usuário
        let postData = JSON.stringify(this.state);
       

        try {
            let response = await fetch('usuario', {
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
                <h1>Novo Usuário</h1>
                <form onSubmit={this.salvarNovoUsuario}>
                    <table width="50px">
                        <tr>
                            <td align='center'><label for="nome">Nome:</label></td>                        
                            <td align='left'><input type="text" id="nome" onChange={this.changeHandler} /></td>
                        </tr>
                        <tr>
                            <td align='center'><label for="email">E-mail: </label></td>
                            <td align='left'><input type="text" id="email" onChange={this.changeHandler}/></td>
                        </tr>
                        <tr>
                            <td align='center'><label for="senha">Senha: </label></td>
                            <td align='left'><input type="text" id="senha" onChange={this.changeHandler} /></td>
                        </tr>
                        <tr>
                            <td align='center'><input type="submit" value="Cadastrar"/></td>
                        </tr>                   
                   </table>
               </form>
            </div>
        );

    }
}

import React, { Component } from 'react';

export class CadastrarVeiculo extends Component {
  static displayName = CadastrarVeiculo.name;
  

    constructor(props) {
        super(props);
        this.state = { nome: null, email: null, senha: null };
    }

    changeHandler = (event) => {
        let id = event.target.id;
        let valor = event.target.value;
        this.setState({ [id]: valor });
    }

    salvarNovoVeiculo = async (event) => {
        event.preventDefault();
        //chamar rest para cadastrar veículo
        let postData = JSON.stringify(this.state);


        try {
            let response = await fetch('veiculo', {
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
                <h1>Novo Veículo</h1>
                <form onSubmit={this.salvarNovoVeiculo}>
                    <table width="400px">
                        <tr>
                            <td align='right'><label for="numero">Código do Veículo:    </label></td>                        
                            <td align='left'><input type="number" id="numero" onChange={this.changeHandler} /></td>
                        </tr>
                        <tr>
                            <td align='right'><label for="nome">Nome:   </label></td>
                            <td align='left'><input type="text" id="nome" onChange={this.changeHandler} /></td>
                        </tr>
                        <tr>
                            <td align='right'><label for="numero">Código do Tipo do Veículo:    </label></td>
                            <td align='left'><input type="number" id="numero" onChange={this.changeHandler} /></td>
                        </tr>
                        <tr>
                            <td align='right'><label for="numero">Percentual da Comissão:    </label></td>
                            <td align='left'><input type="number" id="numero" onChange={this.changeHandler} /></td>
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

import React, { Component} from 'react';
import { MdTransferWithinAStation } from 'react-icons/md';
import { Redirect } from "react-router-dom";
import './index.css';

class EditarUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            usuario: {
                nome: "",
                salario: "",
                dataNascimento: ""
            },
            redirect: false
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;

        fetch (`http://localhost:3003/sistema/usuarios/${id}`)
        .then(data => {
            data.json().then(data => {
                this.setState({usuario: data});

            })
        })
    }

    
render() {
    const { redirect } = this.state;
    if (redirect) {
        return <Redirect to="/usuarios" />;
    }else {
        return (
            <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <legend>Atualizar Usuário</legend>
                    <div className="Usuario-update">
                        <label htmlFor="nome">Nome</label>
                        <br />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome:"
                            minLength="3"
                            maxLength="100"
                            required
                            value={this.state.usuario.nome}
                            onChange={this.handleInputChange}
                        /> 
                    </div>

                    <div className="Usuario-update">
                        <label htmlFor="salario">Salário</label>
                        <br />
                        <input
                            type="text"
                            id="salario"
                            name="salario"
                            placeholder="Digite seu salário:"
                            min="1"
                            max="999999"
                            required
                            value={this.state.usuario.salario}
                            onChange={this.handleInputChange}
                            />
                    </div>
                    
                    <div className="Usuario-update">
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <br />
                        <input
                            type="date"
                            id="dataNascimento"
                            name="dataNascimento"
                            placeholder="Digite a sua data de nascimento:"
                            required
                            value={this.state.usuario.dataNascimento}
                            onChange={this.handleInputChange}
                            />
                    </div>
                    
    
                    <button tupe="submit">Atualizar</button>
                </fieldset>
              </form>
            );
     }
 }
 handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    this.setState(prevState => ({
        usuario: {...prevState.usuario, [name]: value}
    }))
}

handleSubmit = event => {
    const {id} = this.state.usuario;
    fecth('http://localhost:3003/sistema/usuarios/${id}', {
        method: "put", 
        body: JSON.stringify(this.state.usuario),
        headers: {
            "content-Type":"application/json"
        }
    })
    .then(data => {
        if(data.ok){
            this.setState ({ redirect:true})
        }
    })
    event.preventDefault();
};

}
export default EditarUsuario;


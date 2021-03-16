import React, {component} from 'react';

import './index.css';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario: []
        }
    }
    componentDidMount(){
        fetch('endereçobackend')
        .then(usuario =>
            usuario.json().then(usuario => this.setState({usuario}))
            )
    }
    render() {
        const {usuário} = this.state;

        return usuario.map((usuario,index) => (
            <div className="usuario-list">
                <div Key= {index}>
                    <h5>{usuario.nome}</h5>
                    <article>
                    <strong>{usuario.salario}</strong>
                    <p><link to={'/usuarios/${usuario.id}'}>Detalhes</link></p>
                    <br/>
                    </article>
                    </div>
            </div>
        ))
    }
}

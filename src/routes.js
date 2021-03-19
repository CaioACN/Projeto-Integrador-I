
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainUsuario from './pages/usuario/main';
import DetalhesUsuario from './pages/usuario/detalhes';
import CriarUsuario from './pages/usuario/criar';
import EditarUsuario from './pages/usuario/editar';
import Header from './components/header/header';


const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path = "/usuarios" component={MainUsuario}/>
        <Route path = "/usuarios/:id" component={DetalhesUsuario}/>
        <Route path = "/criarUsuario/" component={CriarUsuario}/>
        <Route path = "/editarUsuario/"component={EditarUsuario}/>
        <Route path = "/header/:id" component={Header}/>
        
    

    </Switch>
</BrowserRouter>
)
export default Routes;

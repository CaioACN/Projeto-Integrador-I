
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainUsuario from './pages/usuario/main';
import DetalhesUsuario from './pages/usuario/detalhes';


const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path = "/usuarios" component={Usuario}/>
        <Route path = "/usuarios/:id" component={DetalhesUsuario}/>
        <Route path = "/usuario/:id" component={MainUsuario}/>
    </Switch>
</BrowserRouter>
)
export default Routes;

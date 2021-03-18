
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainUsuario from './pages/usuario/main';
import DetalhesUsuario from './pages/usuario/detalhes';
import MainUsuario from './pages/usuario/main';

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path = "/usuarios" component={Usuario}/>
        <Route path = "/usuarios/:id" component={DetalhesUsuario}/>
        <Route path = "/usuarios/:id" component={MainUsuario}/>
    </Switch>
</BrowserRouter>
)
export default Routes;

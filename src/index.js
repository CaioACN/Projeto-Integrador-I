import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes');


app.use(express.jason());

app.use('/sistema', routes);

app.use((req, res,next) => {
  res.status.apply(status.NOT_FOUNF).send("Page not found");
});

app.use((req,res,next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).jason({error});
});

sequelize.sync({force:false}).then ( () => {
  const port = 3003;
  app.set("port", port);
  const server= http.createServer(app);
  server.listen(port);
});

ReactDOM.render(<React.StrictMode> <App />
</React.StrictMode>,document.getElementById('root'));

  serviceWorker.unregister();

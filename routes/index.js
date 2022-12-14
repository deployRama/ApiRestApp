const express = require('express');
const usersRouter = require('./users.router');
const sendFormRouter = require('./sendForm.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/sendForm', sendFormRouter);

}

module.exports = routerApi;

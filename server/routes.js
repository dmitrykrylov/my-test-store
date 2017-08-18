const Router = require('express').Router;
const itemRoutes = require('./items/routes');


module.exports = (app) => {
  const rootRoutes = new Router();

  rootRoutes
    .use('/api/items', itemRoutes(app));
    // .use('/api/categories', categoryRoutes(app));

  return rootRoutes;
};

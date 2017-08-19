const Router = require('express').Router;
const controllers = require('./controllers');

module.exports = () => {
  const routes = new Router();

  routes
    .get('/', controllers.getItemList)
    .post('/', controllers.createItem)
    .put('/:id', controllers.updateItem)
    .delete('/:id', controllers.deleteItem);

  return routes;
};

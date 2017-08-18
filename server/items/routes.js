const Router = require('express').Router;
const controllers = require('./controllers');

module.exports = () => {
  const routes = new Router();

  routes
    .get('/', controllers.getItemList)
    .post('/', controllers.createItem)
    .put('/', controllers.updateItem)
    .delete('/', controllers.deleteItem);

  return routes;
};
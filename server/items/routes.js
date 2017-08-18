const Router = require('express').Router;
const controllers = require('./controllers');

module.exports = () => {
  const routes = new Router();

  console.log(controllers)
  routes
    .get('/', controllers.getItemList)
    .post('/', controllers.createItem)
    .put('/', controllers.updateItem)
    .delete('/', controllers.deleteItem);

  return routes;
};
